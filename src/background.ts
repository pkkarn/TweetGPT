console.log("It's coming from background")
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        apiKey: 'sk-xxx'
    })
})