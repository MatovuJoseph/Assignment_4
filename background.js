chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://www.newvision.co.ug/";
  chrome.tabs.create({ url: newURL });
});