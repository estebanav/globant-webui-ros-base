document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    document.getElementById("dev-model").innerHTML = device.model;
    document.getElementById("dev-platform").innerHTML = device.platform;
    document.getElementById("dev-version").innerHTML = device.version;
}