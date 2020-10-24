const PlaySound = (sound) => {
    let thissound = document.getElementById(sound);
    thissound.play();
}

const StopSound = (sound) => {
    let thissound = document.getElementById(sound);
    thissound.pause();
    thissound.currentTime = 0;
}