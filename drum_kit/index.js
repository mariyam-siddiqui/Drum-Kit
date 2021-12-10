//TO DO
//CLICK BUTTON
//ANIMATION WHEN THE BUTTON IS CLICKED 
//PLAY MUSIC

var audioVol = 0.6;
const animate = (key) => {
    const currentKey = document.querySelector(`.${key}`);
    currentKey.classList.add('pressed');
    setTimeout(() => {
        currentKey.classList.remove('pressed')
    }, 250)
}

const playMusic =(path) =>{
    const audio = new Audio(path);
    audio.volume = audioVol;
    audio.play();
}

document.addEventListener("keypress",(event)=>{
    const triggeredKey = event.key;
    makeSound(triggeredKey);
    animate(triggeredKey);
})

const slider = document.getElementById("volume__slider")
slider.oninput = (event)=>{
    audioVol = event.target.value/100;
}

const makeSound = (key) => {
    switch (key) {
        case "w":
            playMusic("sounds/sound-1.mp3");
            break;
        case "a":
            playMusic("sounds/sound-2.mp3");
            break;
        case "s":
            playMusic("sounds/sound-3.mp3");
            break;
        case "d":
            playMusic("sounds/sound-4.mp3");
            break;
        case "j":
            playMusic("sounds/sound-5.mp3");
            break;
        case "k":
            playMusic("sounds/sound-6.mp3");
            break;
        case "l":
            playMusic("sounds/sound-7.mp3");
            break;
        default:
            console.log("Hey wrong button");
    }
}

const handleDrumClick = (event) => {
    var innerHTML = event.target.innerHTML;
    console.log(innerHTML);
    animate(innerHTML);
    makeSound(innerHTML);
}

var drums = document.querySelectorAll(".drum") //array of all the elements with the class name drum
for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", handleDrumClick)
}