Detect Cloudflare (for Firefox)
===============================

An extension for Mozilla Firefox which aims to detect whether the current page uses Cloudflare.
It adds an icon to the browser toolbar which indicates the detection status.

This is intended to help users detect which of the sites they visit is using Cloudflare,
so that they can take the appropriate actions (e.g. changing their password) if they are
worried that they are affected by the
[cloudbleed bug](https://bugs.chromium.org/p/project-zero/issues/detail?id=1139).

**Note**: This extension detects whether the page _currently_ uses Cloudflare. It cannot
detect whether the page might have used Cloudflare in the past, especially during the time
period where it was affected by cloudbleed (i.e. 2016-09-22 thru 2017-02-18).
For this, you may check [this list](https://github.com/pirate/sites-using-cloudflare).


Installation
------------

The extension is available on [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/detect-cloudflare/).

However, newest versions might appear there with some delay (hopefully this should be less than one day),
so the impatient can install the extension from source manually:

* Clone or download this repository.
* In Firefox, go to [about:debugging](about:debugging).
* Click "Load Temporary Add-on" and navigate to the file "manifest.json". Double-click/open it.
* This will only load the add-on for the current Firefox session!


How it Works
------------

The extension analyzes all HTTP(S) requests and checks whether any of them are served
by Cloudflare proxies, as identified by certain headers in the HTTP(S) response. Based
on the result of this analysis, the icon changes color:

![green](icons/cf-green-32.png) No requests were served by Cloudflare.

![orange](icons/cf-orange-32.png) Extenal resources were served by Cloudflare.

![red](icons/cf-red-32.png) The page itself was served by Cloudflare.

Clicking on the icon will show a popup with detailed information about the Cloudflare-using domains.


Notes
-----

* This extension analyzes **all** requests made by the browser, though other extensions (e.g. adblockers) may block some requests before they are made.
* When navigating forward/backward inside a tab, the detection status will reset to neutral. To get the correct status, the page needs to be reloaded. (Though nowadays the reload happens automatically for many webpages.)
* This is my first WebExtension, and also my first JavaScript project. Use at your own risk!


TODO
----

* Analyze performance impact. So far all test show negligible impact.

