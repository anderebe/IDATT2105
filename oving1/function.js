var audio = new Audio('https://ia601700.us.archive.org/5/items/polish-cow-full-version/Polish%20Cow%20Full%20Version.mp3'); // Replace 'path/to/audio.mp3' with the actual path to your audio file

function revealCow() {
    var gifElement = document.querySelector('.gif');

    if (audio.paused) {
        gifElement.style.opacity = '1';
        audio.play();
    } else if (audio.played) {
        gifElement.style.opacity = '0';
        audio.pause();
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

