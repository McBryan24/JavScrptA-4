chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://www.dailymail.co.uk/sport/football/index.html";
  chrome.tabs.create({ url: newURL });
});