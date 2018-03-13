function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}

/**
 * @param {int} value The new Playback Rate.
 */
function chagePlaybackRate(value) {
  var script = 'document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate = ' + value + ';';
  
  chrome.tabs.executeScript({
    code: script
  });
}

document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url) => {
    var dropdown = document.getElementById('dropdown');
    dropdown.addEventListener('change', () => {
      chagePlaybackRate(dropdown.value);
    });
  });
});
