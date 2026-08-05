let audioA = new Audio();
let audioB = new Audio();

let bpmA = 128;
let bpmB = 128;


// LOAD A
function loadTrackA(event){

let file = event.target.files[0];

if(!file) return;

audioA.src = URL.createObjectURL(file);
audioA.load();

document.getElementById("trackA").innerHTML=file.name;

}



// LOAD B
function loadTrackB(event){

let file = event.target.files[0];

if(!file) return;

audioB.src = URL.createObjectURL(file);
audioB.load();

document.getElementById("trackB").innerHTML=file.name;

}



// PLAY

function playA(){

if(audioA.src){
audioA.play();
}

}


function playB(){

if(audioB.src){
audioB.play();
}

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



// PITCH

function pitchA(v){

audioA.playbackRate=v;

}


function pitchB(v){

audioB.playbackRate=v;

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



// AUTO SYNC

function sync(){

let ratio=bpmA/bpmB;

audioB.playbackRate=ratio;

alert("AUTO SYNC ENABLED");

}



// AI MIX

function aiMix(){

audioA.play();

setTimeout(()=>{

audioB.play();

sync();

},5000);

}



// FIXED BPM DISPLAY

function detectBPM(){

document.getElementById("bpmA").innerHTML=bpmA;
document.getElementById("bpmB").innerHTML=bpmB;

}


detectBPM();

console.log("IMAN DJ AI STUDIO READY");
