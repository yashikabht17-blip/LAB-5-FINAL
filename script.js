let zoomedIn = false;

function zoomImage() {
    if (zoomedIn === false) {
        document.getElementById("photo").style.width = "100%";
        document.getElementById("zoomButton").innerHTML = "Zoom out";
        zoomedIn = true;
    } else {
        document.getElementById("photo").style.width = "70%";
        document.getElementById("zoomButton").innerHTML = "Zoom in";
        zoomedIn = false;
    }
}