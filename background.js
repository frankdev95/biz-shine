chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if(/^https:\/\/www\.google.+/.test(current_tab_info.url)) {
            chrome.tabs.insertCSS(null, {file: './style.css'});
            chrome.tabs.executeScript(null, {file: './foreground.js'}, () => console.log("foreground script loaded")); // arguments: (tab-to-inject-script, file-to-inject, callback function(optional))
        }
    })
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);
    console.log(sender);
});

chrome.webRequest.onBeforeRequest.addListener(e => {
    if(e.url.indexOf('search/results/people') > -1) {
        console.log(e);
        storage.set(e.tabId, {
            url: e.url,
            type: "web",
            method: e.method
        });
    }
    console.log(storage.get(e.tabId));
}, {urls: ["https://www.linkedin.com/*/*", "https://www.google.com/*", "https://www.google.co.uk/*"]});
