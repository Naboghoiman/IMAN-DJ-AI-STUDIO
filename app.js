// IMAN DJ AI STUDIO ENGINE

let audioA = new Audio();
let audioB = new Audio();

let masterVolume = 1;
let volumeA = 1;
let volumeB = 1;
let crossFade = 0.5;


// LOAD TRACK A

function loadTrackA(event){

let file = event.target.files[0];

if(file){

audioA.src = URL.createObjectURL(file);

document.querySelector(".trackA").innerHTML =
file.name;

}

}



// LOAD TRACK B

function loadTrackB(event){

let file = event.target.files[0];

if(file){

audioB.src = URL.createObjectURL(file);

document.querySelector(".trackB").innerHTML =
file.name;

}

}



// PLAY

function playA(){

audioA.play();

}


function playB(){

audioB.play();

}



// PAUSE

function pauseA(){

audioA.pause();

}


function pauseB(){

audioB.pause();

}



// STOP

function stopA(){

audioA.pause();

audioA.currentTime=0;

}


function stopB(){

audioB.pause();

audioB.currentTime=0;

}



// VOLUME CONTROL

function setVolumeA(value){

volumeA=value;

updateMix();

}



function setVolumeB(value){

volumeB=value;

updateMix();

}




// CROSS FADER

function setCross(value){

crossFade=value;

updateMix();

}




// MASTER

function setMaster(value){

masterVolume=value;

updateMix();

}




function updateMix(){

audioA.volume =
volumeA *
(1-crossFade)
*
masterVolume;


audioB.volume =
volumeB *
crossFade
*
masterVolume;


}




// PITCH

function pitchA(value){

audioA.playbackRate=value;

}



function pitchB(value){

audioB.playbackRate=value;

}




// LEVEL METER

setInterval(()=>{

let bars =
document.querySelectorAll(".level");


bars.forEach(bar=>{

bar.style.height =
(20 + Math.random()*70)+"%";


});


},150);




console.log(
"IMAN DJ AI STUDIO READY"
);
