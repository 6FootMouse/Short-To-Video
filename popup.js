document.getElementById('openTab').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.create({ url: tabs[0].url });
    });
  });