// 1: Declaring Count variable 

let variableCount = 0;

// 2: Getting button-element by "itsID" ( In the form of an object const? )
const button = document.getElementById("button");
const sound = document.getElementById("click-sound");

const DisplayCount = document.getElementById("click-count");

// 3: Adding an event listener that listens for clicks
button.addEventListener("click", function() {
    variableCount = variableCount + 1;
    DisplayCount.textContent = variableCount;

    sound.currentTime = 0;
    sound.play();
});


// 3: Adding sounds

