Detect Cloudflare (for Firefox)
===============================

An extension for Mozilla Firefox which aims to detect whether the current page uses Cloudflare.
It adds an icon to the browser toolbar which indicates the detection status.

This is intended to help users detect which of the sites they visit is using Cloudflare,
so that they can take the appropriate actions (e.g. changing their password) if they are
worried that they are affected by the
[cloudbleed bug](https://bugs.chromium.org/p/project-zero/issues/detail?id=1139).


Installation
------------

The extension is available on [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/detect-cloudflare/).

However, newest versions might appear there with some delay (though this should be less than one day),
so the impatient can install the extension from source manually:

* Clone or download this repository.
* In Firefox, go to [about:debugging](about:debugging).
* Click "Load Temporary Add-on" and navigate to the file "manifest.json". Double-click/open it.
* This will only load the add-on for the current Firefox session!


Warning
-------

* Currently a positive detection will happen if **any** request for the page is served by Cloudflare, including requests to 3rd party domains (e.g. for images or scripts). Whether these cases are false positives or not depends on the paranoia level of the user.
* This extension analyzes **all** requests made by the browser, which may impact performance.
* This is my first WebExtension, and also my first JavaScript project. Use at your own risk!


TODO
----

* Make better icons.
* Count number of requests served by Cloudflare, and show it as a badge on the icon, or after clicking on it.
* Count requests by domain. Use other (yellow?) icon if only 3rd party domains are affected.
* Analyze performance impact.

