# XMRig-Monitor
HTML XMRig Monitor

This is a very simple monitor for XMRig mining software. It was only tested with GPU AMD mining, but I believe it should work with any setup. If it's not the case, feel free to create an issue and please share your API json (at least partially) so I can make the needed changes.

This monitor is better used with a browser addon/extension that lets you auto-refresh a tab. I personally refresh every minute.

## Setup, step by step

1. Download the repository. It's only one HTML file with an audio file for alerts and the favicon.
2. Open the `monitor.html` file in your favorite text editor.
3. Navigate to the line 166 (or use CTRL+F and search for `getJSON`)
4. Change the URL to your own API endpoint.
5. You're done!

## Extra features

### Alarm
Line 220 (or use CTRL+F and search for `threshold`) lets you set an alarm in case you total hashrate (15 minutes) gets lower than the defined value. The alarm plays every 5 seconds. The default is 0. This works well only if you setup an auto-refresh addon/extension on your browser.

### Aggregated hashrate for cards with double threads (e.g. AMD Radeon Vega)
If you use AMD Radeon Vega or any other card that shows up in two different threads, then you have the option to show them aggregated as the second screenshot below shows. I personally like seeing each card in only one row instead of two rows (one pert hread), so you may also find this useful.

The aggregated view **is not the default**. If you want to change it, open the HTML file, go to line 192 (or use CTRL+F and search for `GPU threads`) and read the comment explaining how to edit the file. You will have to *"comment"* or delete the `while` considering one row per thread and uncomment the next one doing the aggregation.

### Images

First: normal one showing one row per thread.

Second: showing two threads per row (useful for AMD Radeon Vega).

![xmrig-monitor-normal](https://i.imgur.com/7QkMQnI.png)
![xmrig-monitor-coupled](https://i.imgur.com/ZkyE2kJ.png)

# Donate
If this simple monitor helped you any way, consider buying me a beer and a pepperoni pizza!

XMR: 84tUVgLs3u7Ki9rfogHZJkCqCgMApCpmJaDr5sfqYiqtePDnzr5ALtuGy2T3JR4W8AgnAp9oyVLuH4TW5nhPSRX5Pf7eLz3
