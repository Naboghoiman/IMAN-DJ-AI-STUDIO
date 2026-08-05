let audioA = new Audio();
let audioB = new Audio();

let gainA = 1;
let gainB = 1;
let master = 1;

let cross = 0.5;


// LOAD DECK A

function loadTrackA(event){

let file = event.target.files[0];

audioA.src = URL.createObjectURL(file);

document.getElementById("trackA").innerHTML =
file.name;

}



// LOAD DECK B

function loadTrackB(event){

let file = event.target.files[0];

audioB.src = URL.createObjectURL(file);

document.getElementById("trackB").innerHTML =
file.name;

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





// VOLUME

function volumeA(v){

gainA=v;

updateMixer();

}


function volumeB(v){

gainB=v;

updateMixer();

}





// CROSS FADER

function crossFade(v){

cross=v;

updateMixer();

}




// MASTER

function setMaster(v){

master=v;

updateMixer();

}




function updateMixer(){

audioA.volume =
gainA * (1-cross) * master;


audioB.volume =
gainB * cross * master;


}





// PITCH

function pitchA(v){

audioA.playbackRate=v;

}


function pitchB(v){

audioB.playbackRate=v;

}





// SIMPLE SYNC

function sync(){

audioB.currentTime =
audioA.currentTime;

}





// RECORD SUPPORT

let recorder;

function startRecord(){

let stream =
new MediaStream();

recorder =
new MediaRecorder(stream);

recorder.start();

}


function stopRecord(){

if(recorder)
recorder.stop();

}
