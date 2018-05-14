# XMRig-Monitor

Extremely simple to use, HTML monitor for XMRig mining software. It also has a proxy monitor (`monitor-proxy.html`). Please check screenshots at the end of the page.

The monitor comes with embedded auto-refresh (default 60 seconds) that can be turned off. I recommend leaving it to 60 seconds and using the alarm feature so you can quickly know if your rig goes below a threshold.

## Setup

1. Download the repository.
2. Open the `variables.js` file.
3. Change the URL to your own API endpoint.
4. You're done!

## Optional features
You can use these features by changing the necessary values in `variables.js`.

### Alarm
You can setup a hashrate threshold for your monitor by changing the variable `alarmThreshold`. If the 10-seconds average (60-minutes average for proxy) goes below the threshold, the tab will try to play a sound. Works pretty well with the auto-refresh feature.

### Aggregated hashrate for cards with two threads (e.g. AMD Radeon Vega)
You can setup the monitor to show two threads in a single row, instead of showing one row per thread, by changing the variable `aggregateThreads` to `1`. This feature is useful for people running GPUs with two threads. See screenshots below for an example.

## Screenshots

<img src="https://i.imgur.com/eg4Avpp.jpg" height="476" width="280"> <img src="https://i.imgur.com/iXAfRlx.jpg" height="476" width="280"> <img src="https://i.imgur.com/tfD5KzJ.jpg" height="476" width="280"> 

# Donate
If this simple monitor helped you any way, consider tipping me some pizza change!

XMR: 84tUVgLs3u7Ki9rfogHZJkCqCgMApCpmJaDr5sfqYiqtePDnzr5ALtuGy2T3JR4W8AgnAp9oyVLuH4TW5nhPSRX5Pf7eLz3
