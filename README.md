# XMRig-Monitor

Extremely simple to use, HTML monitor for XMRig mining software. It also has a proxy monitor (`monitor-proxy.html`). Please check screenshots at the end of the page.

This monitor is better used with a browser addon/extension that lets you auto-refresh a tab. I personally refresh every minute. 

## Setup

1. Download the repository.
2. Open the `variables.js` file.
3. Change the URL to your own API endpoint.
4. You're done!

## Optional features
You can use these features by changing the necessary values in `variables.js`.

### Alarm
You can setup a hashrate threshold for your monitor by changing the variable `alarmThreshold`. If the 15-minutes average (60-minutes average for proxy) goes below the threshold, the tab will try to play a sound and show a JavaScript alert. Works pretty well with an auto-refresh addon/extension.

### Aggregated hashrate for cards with two threads (e.g. AMD Radeon Vega)
You can setup the monitor to show two threads in a single row, instead of showing one row per thread. This feature is useful for people running GPUs with two threads. See screenshots above for an example.

## Screenshots

<img src="https://i.imgur.com/oTGgTVj.jpg" height="670" width="400"> <img src="https://i.imgur.com/MKwZMir.jpg" height="547" width="400">
<img src="https://i.imgur.com/Do5E2q0.jpg" height="379" width="400"> <img src="https://i.imgur.com/jDvTcIm.jpg" height="563" width="400">

# Donate
If this simple monitor helped you any way, consider tipping me beer & pizza change!

XMR: 84tUVgLs3u7Ki9rfogHZJkCqCgMApCpmJaDr5sfqYiqtePDnzr5ALtuGy2T3JR4W8AgnAp9oyVLuH4TW5nhPSRX5Pf7eLz3
