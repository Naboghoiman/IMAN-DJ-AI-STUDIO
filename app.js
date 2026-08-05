// =====================================
// IMAN DJ AI STUDIO
// REAL WAVEFORM AUDIO ENGINE
// =====================================

let deckA = new Audio();
let deckB = new Audio();

let audioCtx;
let analyserA;
let analyserB;
let sourceA;
let sourceB;


// CREATE AUDIO ENGINE

function initAudio(){

if(audioCtx) return;

audioCtx = new AudioContext();

analyserA = audioCtx.createAnalyser();
analyserB = audioCtx.createAnalyser();

analyserA.fftSize = 256;
analyserB.fftSize = 256;

sourceA = audioCtx.createMediaElementSource(deckA);
sourceB = audioCtx.createMediaElementSource(deckB);

sourceA.connect(analyserA);
analyserA.connect(audioCtx.destination);

sourceB.connect(analyserB);
analyserB.connect(audioCtx.destination);

drawWave();

}



// LOAD DECK A

function loadTrackA(e){

let file=e.target.files[0];

if(!file)return;

deckA.src=URL.createObjectURL(file);

document.getElementById("trackA").innerHTML=file.name;

initAudio();

}



// LOAD DECK B

function loadTrackB(e){

let file=e.target.files[0];

if(!file)return;

deckB.src=URL.createObjectURL(file);

document.getElementById("trackB").innerHTML=file.name;

initAudio();

}





// PLAY

function playA(){

initAudio();

audioCtx.resume();

deckA.play();

}


function playB(){

initAudio();

audioCtx.resume();

deckB.play();

}





// PAUSE

function pauseA(){

deckA.pause();

}


function pauseB(){

deckB.pause();

}





// STOP

function stopA(){

deckA.pause();

deckA.currentTime=0;

}


function stopB(){

deckB.pause();

deckB.currentTime=0;

}






// VOLUME

function volumeA(v){

deckA.volume=v;

}


function volumeB(v){

deckB.volume=v;

}





// PITCH

function pitchA(v){

deckA.playbackRate=v;

}


function pitchB(v){

deckB.playbackRate=v;

}





// CROSS FADER

function setCross(v){

deckA.volume=1-v;

deckB.volume=v;

}





// MASTER

function setMaster(v){

deckA.volume=v;

deckB.volume=v;

}





// SYNC

function sync(){

deckB.currentTime=deckA.currentTime;

deckB.playbackRate=deckA.playbackRate;

}





// REAL WAVEFORM

function drawWave(){

requestAnimationFrame(drawWave);


let dataA=new Uint8Array(analyserA.frequencyBinCount);

let dataB=new Uint8Array(analyserB.frequencyBinCount);


if(analyserA){

analyserA.getByteFrequencyData(dataA);

}


if(analyserB){

analyserB.getByteFrequencyData(dataB);

}


let levelA=Math.max(...dataA);

let levelB=Math.max(...dataB);



let waveA=document.querySelector(".waveform");

if(waveA){

waveA.style.height=(80+levelA/3)+"px";

}



}





console.log("IMAN DJ REAL AUDIO ENGINE READY");
