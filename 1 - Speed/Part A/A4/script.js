//Put your code here

let currentColour = '#a9db7a';

const happyButton = document.getElementById('happyButton');
const averageButton = document.getElementById('averageButton');
const sadButton = document.getElementById('sadButton');
const face = document.getElementById('face');

happyButton.onclick = happyFace;
averageButton.onclick = averageFace;
sadButton.onclick = sadFace;

function changeFace(currentColour, animationName, faceText) {
    face.style.backgroundColor=currentColour;
    face.style.animationName=animationName;
    face.style.animationDuration='1s';
    face.style.animationFillMode='forwards';
    face.innerText = faceText;
}

function happyFace() {
    changeFace(currentColour, 'toHappy', ':)');
    currentColour = '#a9db7a'
}

function averageFace() {
    changeFace(currentColour, 'toAverage', ':|');
    currentColour = '#eed16b'
}

function sadFace() {
    changeFace(currentColour, 'toSad', ':(');
    currentColour = '#ee9295'
}
