var audio = document.getElementById("myAudio");

function playAudio() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}