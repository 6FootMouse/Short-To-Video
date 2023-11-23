
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  if (tabs[0].url.includes('youtube.com/shorts')) {
    const shortId = tabs[0].url.split('/').pop();
    const video = document.querySelector('video');
    const videoUrl = `https://www.youtube.com/watch?v=${shortId}`;
    chrome.tabs.create({ url: videoUrl, index: tabs[0].index + 1, active: false });
  }
    if (video) {
      video.pause();
  }
});