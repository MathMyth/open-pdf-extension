chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'openPDFs') {
    const links = document.querySelectorAll('a[href$=".pdf"]');
    links.forEach((link) => {
      const pdfUrl = link.href;
      window.open(pdfUrl, '_blank');
    });
  }
});
