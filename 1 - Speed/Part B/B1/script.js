//Put your code here

const canvas = document.getElementById('canvas');

const context = canvas.getContext('2d');

function makeNewImage(source) {
    newImage = new Image();
    newImage.src = source;
    newImage.onload = function drawImage() {
        context.drawImage(newImage, 0, 0);
    };
}

makeNewImage('img/athena.jpg');