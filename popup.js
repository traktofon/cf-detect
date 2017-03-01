const statusText = {
    0: "No detection has been performed.",
    1: "No requests were served by Cloudflare.",
    2: "Requests for these domains were served by Cloudflare:",
    3: "Requests for these domains were served by Cloudflare:",
   99: "Detection result unavailable."
};

var getTab = browser.tabs.query( { active:true, currentWindow:true } );
var getBGW = browser.runtime.getBackgroundPage(); // not work in private mode?

Promise.all([ getTab, getBGW ])
    .then( function( results ) {
        var tab = results[0][0];
        var page = results[1];
        if (!page) {
            writeStatus(99);
            console.log(`CF-Detect-Popup: tabId ${tab.id} cannot access background page`);
            return;
        }
        var info = page.getCFInfo(tab.id);
        if (info) {
            writeStatus(info.result);
            populatePopup(info.domainCounter.counts);
        } else {
            writeStatus(0);
        }
    })
    .catch( function( error ) {
        console.log(`CF-Detect-Popup: ${error}`);
    });

function writeStatus( st ) {
    var p = document.getElementById("status");
    p.innerHTML = statusText[st];
}

function populatePopup( domainCounts ) {
    if (domainCounts.size == 0) return;
    var div = document.getElementById("top");
    var ul = document.createElement("ul");
    domainCounts.forEach( function(count, domain) {
        var li = document.createElement("li");
        var text = document.createTextNode(`${domain}: `);
        var span = document.createElement("span");
        span.setAttribute("class", "count");
        span.innerHTML = `${count}`;
        li.appendChild(text);
        li.appendChild(span);
        ul.appendChild(li);
    });
    div.appendChild(ul);
}

// vim: set expandtab ts=4 sw=4 :
