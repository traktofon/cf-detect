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

The extension has been submitted to [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/detect-cloudflare/)
but is currently queued for review. Apparently, current versions of Firefox will not allow the extension to be installed
until it has been reviewed. But you can install it manually:

* Clone or download this repository.
* In Firefox, go to [about:debugging](about:debugging).
* Click "Load Temporary Add-on" and navigate to the file "manifest.json". Double-click/open it.
* This will only load the add-on for the current Firefox session!


Warning
-------

* This extension analyzes **all** requests made by the browser, which may impact performance.
* This is my first WebExtension, and also my first JavaScript project. Use at your own risk!


TODO
----

* Make better icons.
* Count number of requests served by Cloudflare, and show it as a badge on the icon.
* Analyze performance impact.

