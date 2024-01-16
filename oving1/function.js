
function revealCow() {
    var gifVideo = document.querySelector('.gif img');
    var gifAudio = document.querySelector('.gif audio');

    if (gifAudio.paused) {
        gifVideo.style.opacity = '1';
        gifAudio.play();
    } else if (gifAudio.played) {
        gifVideo.style.opacity = '0';
        gifAudio.pause();
    }
}

function changeGif() {
    var gifVideo = document.querySelector('.gif img');
    var gifAudio = document.querySelector('.gif audio');
    var button = document.querySelector('.gif-button');

    gifVideo.style.opacity = '0';
    gifAudio.pause();

    if (gifVideo.src.includes('ahmed-musin.gif')) {
        setTimeout(function() {
            gifVideo.src = 'gifs/polish-cow-cow.gif';
            gifAudio.src = 'audio/polish-cow-cow.mp3';
            button.transform = 'rotate(180deg)';
        }, 200); // Add a delay of 200 milliseconds
    } else {
        setTimeout(function() {
            gifVideo.src = 'gifs/ahmed-musin.gif';
            gifAudio.src = 'audio/ahmed-musin.mp3';
        }, 200); // Add a delay of 200 milliseconds
    }
}
function newPage1() {
    window.location.href = "https://www.youtube.com/watch?v=2ZIpFytCSVc";
}

function goHome() {
    window.location.href = "index.html";
}

function goClose(){
    window.close();
}

function goSettings() {
    
}

