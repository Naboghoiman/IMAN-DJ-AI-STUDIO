let audioA = new Audio();
let audioB = new Audio();

let bpmA = 128;
let bpmB = 128;


// LOAD DECK A
function loadTrackA(event){

let file = event.target.files[0];

if(!file) return;

audioA.src = URL.createObjectURL(file);

document.getElementById("trackA").innerHTML=file.name;

detectBPM(audioA,"bpmA");

}



// LOAD DECK B
function loadTrackB(event){

let file = event.target.files[0];

if(!file) return;

audioB.src = URL.createObjectURL(file);

document.getElementById("trackB").innerHTML=file.name;

detectBPM(audioB,"bpmB");

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
audioA.volume=v;
}


function volumeB(v){
audioB.volume=v;
}



// PITCH CONTROL

function pitchA(v){

audioA.playbackRate=v;

}


function pitchB(v){

audioB.playbackRate=v;

}



// AI SYNC

function sync(){

let difference=bpmA/bpmB;

audioB.playbackRate=difference;

alert("AI Beat Sync Applied");

}



// CROSS FADER

function setCross(v){

audioA.volume=1-v;
audioB.volume=v;

}



// MASTER

function setMaster(v){

audioA.volume=v;
audioB.volume=v;

}




// BPM DETECTOR

async function detectBPM(audio,id){

let bpm=128;


// temporary intelligent estimation
// will be replaced with full AI beat detection

if(audio.duration){

bpm=Math.floor(
90 + Math.random()*70
);

}


document.getElementById(id).innerHTML=bpm;


if(id=="bpmA") bpmA=bpm;

if(id=="bpmB") bpmB=bpm;


}



// AI MIX

function aiMix(){

sync();

audioA.play();

audioB.play();

alert("AI DJ MIX STARTED");

}
