// queryString Data get way
let queryString = location.search
const urlParams = new URLSearchParams(queryString);

document.getElementById("workCount").innerHTML = urlParams.get("workCount")
document.getElementById("rider").innerHTML = urlParams.get("rider")
document.getElementById("sensor").innerHTML = urlParams.get("sensor")

document.getElementById("total").innerHTML = urlParams.get("total")
document.getElementById("overSpeed").innerHTML = urlParams.get("overSpeed")
document.getElementById("accel").innerHTML = urlParams.get("accel")
document.getElementById("decel").innerHTML = urlParams.get("decel")
document.getElementById("start").innerHTML = urlParams.get("start")
document.getElementById("turn").innerHTML = urlParams.get("turn")

