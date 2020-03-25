window.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //STOP THE FUNCTION FROM RUNNING ALL TOGETHER
    audio.currentTime = 0; //REWINDS TO START
    audio.play();
    key.classList.add("playing");
});

function transtEnd(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
    console.log(e.propertyName);
}
const keys =document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', transtEnd))