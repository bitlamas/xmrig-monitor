/**
  * Thank you for using the XMRig Monitor! If you have any
  * troubles, please open an issue on GitHub and I'll see what
  * I can do: https://github.com/curumimxara/xmrig-monitor
  *
  * This is the setup file. The only required information is
  * the API Endpoint address.
  *
 */

var endpointAPI = "http://YOUR-MINING-IP-HERE:PORT/"; // required. your API Endpoint address goes here. e.g. http://192.168.1.5:11000/ or http://myproxydomain.org:8080/
var alarmThreshold = 0; // optional. if the 15-minutes average goes below this number, your tab will play a sound and an alert (for proxy it looks at the 60-minutes average)
var aggregateThreads = 0; // optional. if you're using AMD Radeon Vega and you want to see one card per row (each card has two threads) change this to '1'