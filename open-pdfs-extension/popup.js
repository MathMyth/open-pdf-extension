document.addEventListener('DOMContentLoaded', function() {
  const fileInput = document.getElementById('file-input');
  const openButton = document.getElementById('open-btn');

  openButton.addEventListener('click', function() {
    const files = fileInput.files;
    const pdfUrls = Array.from(files).map(file => URL.createObjectURL(file));
    chrome.runtime.sendMessage({ action: 'openPDFs', data: pdfUrls });
  });
});
