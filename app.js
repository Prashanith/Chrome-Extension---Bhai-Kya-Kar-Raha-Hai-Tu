// chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//     let url = tabs[0].url;
//     if(url.slice(12)){

//     }
//     https://www.facebook.com/
// });


// chrome.runtime.onInstalled.addListener(function() {
//     chrome.contextMenus.create({
//         "id": "sampleContextMenu",
//         "title": "Sample Context Menu",
//         "contexts": ["selection"]
//     });
// });

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
        if(tab.url.includes("facebook.com") || tab.url.includes("instagram.com") ||tab.url.includes("twitter.com"))
        window.open('index.html','_blank');

  
    }
  })