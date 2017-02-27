function onError(e) {
    console.log(`CF-Detect-Error: ${e}`);
}

function cfdetect( details ) {
    var headers = details.responseHeaders;
    var cf = false;
    for (var i=0; i<headers.length; i++) {
        var h = headers[i];
        var hname = h.name.toLowerCase();
        if ((hname === "cf-ray") ||
            (hname === "server" && h.value === "cloudflare-nginx")) {
            cf = true;
            break;
        }
    }
    if (cf) {
        if (details.tabId != -1) {
            browser.browserAction.setTitle({
                tabId: details.tabId,
                title: "This page uses Cloudflare!"
            });
            browser.browserAction.setIcon({
                tabId: details.tabId,
                path: {
                    48: "icons/cloudyes48.png",
                    96: "icons/cloudyes96.png"
                }
            });
        }
    }
}

function handleTabUpdate( tabId, changeInfo, tabInfo ) {
    if ("url" in changeInfo) {
        browser.browserAction.setTitle({
            tabId: tabId,
            title: "Indicates whether this page uses Cloudflare"
        });
        browser.browserAction.setIcon({
            tabId: tabId,
            path: {
                48: "icons/cloud48.png",
                96: "icons/cloud96.png"
            }
        });
    }
}

browser.webRequest.onHeadersReceived.addListener(
    cfdetect,
    { urls: [ "<all_urls>" ] },
    [ "responseHeaders" ]
);

browser.tabs.onUpdated.addListener( handleTabUpdate );

// vim: set expandtab ts=4 sw=4 :
