document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    var my_media = new Media("audio/1.mp3");

    var mediaTimer;
    function startTimer() {
        clearInterval(mediaTimer);
        // Update media position every second
        mediaTimer = setInterval(function () {
            // get media position
            my_media.getCurrentPosition(
                    // success callback
                            function (position) {
                                if (position > -1) {
                                    $("#time").text(position+"sec");
                                }
                            },
                            // error callback
                                    function (e) {
                                        console.log("Error getting pos=" + e);
                                    }
                            );
                        }, 1000);
            }



    $("#play").click(function () {
        my_media.play();
        startTimer();
    });
    $("#pause").click(function () {
        my_media.pause();
        clearInterval(mediaTimer);
    });
}

