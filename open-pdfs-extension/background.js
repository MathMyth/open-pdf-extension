chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'openSelectedPDFs',
    title: 'Open Selected PDFs',
    contexts: ['all'],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'openSelectedPDFs') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: 'openPDFs' });
    });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'openPDFs') {
    const pdfUrls = request.data;
    pdfUrls.forEach((url) => {
      chrome.tabs.create({ url });
    });
  }
});
