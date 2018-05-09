$.getJSON(endpointAPI, function(data) {

    // xmrig and worker info
    document.getElementById("version").innerHTML = data.version + ' - ' + data.kind.toUpperCase();
    document.getElementById("ua").innerHTML = data.ua;
    document.getElementById("worker_id").innerHTML = data.worker_id;
    document.getElementById("algo").innerHTML = data.algo;

    // results
    document.getElementById("diff_current").innerHTML = data.results.diff_current;
    document.getElementById("results").innerHTML = data.results.shares_good + ' / ' + data.results.shares_total + ' (' + Number((data.results.shares_good / data.results.shares_total) * 100).toFixed(2) + '%)';
    document.getElementById("avg_time").innerHTML = data.results.avg_time + ' seconds';
    document.getElementById("error_log_r").innerHTML = data.results.error_log;

    // connection
    document.getElementById("pool").innerHTML = data.connection.pool;
    document.getElementById("uptime").innerHTML = (data.connection.uptime / 3600).toFixed(2) + ' hours / ' + (data.connection.uptime / 86400).toFixed(2) + ' days';
    document.getElementById("ping").innerHTML = data.connection.ping + ' ms';
    document.getElementById("failures").innerHTML = data.connection.failures;
    document.getElementById("error_log_c").innerHTML = data.connection.error_log;

    // threads
    var threads = data.hashrate.threads.length;
    var row = 0;
    if (aggregateThreads === 1) {
        while (row < threads) {
            var next = row + 1;
            document.getElementById("gpu").innerHTML = document.getElementById("gpu").innerHTML + "<tr><th>" + row + " & " + (next) + "</th><td>" + (data.hashrate.threads[row][0] + data.hashrate.threads[next][0]).toFixed(1) + "</td><td>" + (data.hashrate.threads[row][1] + data.hashrate.threads[next][1]).toFixed(1) + "</td><td>" + (data.hashrate.threads[row][2] + data.hashrate.threads[next][2]).toFixed(1) + "</td></tr>";
            row = row + 2;
        }
    } else {
        while (row < threads) {
            document.getElementById("gpu").innerHTML = document.getElementById("gpu").innerHTML + "<tr><th>" + row + "</th><td>" + data.hashrate.threads[row][0] + "</td><td>" + data.hashrate.threads[row][1] + "</td><td>" + data.hashrate.threads[row][2] + "</td></tr>";
            row++;
        }
    }


    // write totals
    document.getElementById("gpu").innerHTML = document.getElementById("gpu").innerHTML + "<tr><th>Totals</th><th id='tot10'>" + Number(data.hashrate.total[0]).toFixed(1) + "</th><th id='tot60'>" + Number(data.hashrate.total[1]).toFixed(1) + "</th><th id='tot900'>" + Number(data.hashrate.total[2]).toFixed(1); + "</th></tr>";

});

// footer information
document.getElementById("api").innerHTML = endpointAPI;
document.getElementById("alarm").innerHTML = alarmThreshold.toLocaleString('en-GB');

// alert for hashrate drop
var audio = new Audio('media/hell.wav');
setInterval(function() {
    var tot10 = Number(document.getElementById("tot900").innerText).toFixed(0);
    if (tot10 < alarmThreshold) {
        audio.play();
        alert('Current hashrate is ' + tot10 + '.\nIt is ' + (alarmThreshold - tot10).toFixed(0) + ' below threshold.');
    }
}, 5000);