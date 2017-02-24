Detect Cloudflare (for Firefox)
===============================

An extension for Mozilla Firefox which aims to detect whether the current page uses Cloudflare.
It adds an icon to the browser toolbar which indicates the detection status.

This is intended to help users detect which of the sites they visit is using Cloudflare,
so that they can take the appropriate actions (e.g. changing their password) if they are
worried that they are affected by the
[cloudbleed bug](https://bugs.chromium.org/p/project-zero/issues/detail?id=1139).


Warning
-------

* This extension analyzes **all** requests made by the browser, which may impact performance.
* This is my first WebExtension, and also my first JavaScript project. Use at your own risk!


TODO
----

* Make better icons.
* Count number of requests served by Cloudflare, and show it as a badge on the icon.
* Analyze performance impact.

