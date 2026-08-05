// =====================================
// IMAN DJ AI STUDIO
// FINAL DJ ENGINE
// PLAYER + EFFECTS + EQ
// =====================================


let deckA = new Audio();
let deckB = new Audio();


let audioCtx;

let sourceA;

let filterA;

let delayA;

let eqBass;
let eqMid;
let eqTreble;




// ==============================
// AUDIO ENGINE
// ==============================


function initAudio(){


if(audioCtx) return;


audioCtx = new AudioContext();



sourceA =
audioCtx.createMediaElementSource(deckA);



// FILTER

filterA =
audioCtx.createBiquadFilter();

filterA.type="lowpass";

filterA.frequency.value=20000;



// DELAY

delayA =
audioCtx.createDelay();

delayA.delayTime.value=0.25;



// EQ

eqBass =
audioCtx.createBiquadFilter();

eqBass.type="lowshelf";

eqBass.frequency.value=200;



eqMid =
audioCtx.createBiquadFilter();

eqMid.type="peaking";

eqMid.frequency.value=1000;



eqTreble =
audioCtx.createBiquadFilter();

eqTreble.type="highshelf";

eqTreble.frequency.value=4000;



sourceA
.connect(filterA)
.connect(eqBass)
.connect(eqMid)
.connect(eqTreble)
.connect(delayA)
.connect(audioCtx.destination);



}





// ==============================
// LOAD TRACKS
// ==============================


function loadTrackA(e){

let file=e.target.files[0];

if(!file)return;


deckA.src=
URL.createObjectURL(file);


document.getElementById("trackA").innerHTML=file.name;


}



function loadTrackB(e){

let file=e.target.files[0];

if(!file)return;


deckB.src=
URL.createObjectURL(file);


document.getElementById("trackB").innerHTML=file.name;


}





// ==============================
// PLAY
// ==============================


function playA(){

initAudio();

audioCtx.resume();

deckA.play();

}



function playB(){

deckB.play();

}





// ==============================
// PAUSE STOP
// ==============================


function pauseA(){

deckA.pause();

}


function pauseB(){

deckB.pause();

}



function stopA(){

deckA.pause();

deckA.currentTime=0;

}



function stopB(){

deckB.pause();

deckB.currentTime=0;

}







// ==============================
// VOLUME
// ==============================


function volumeA(v){

deckA.volume=v;

}



function volumeB(v){

deckB.volume=v;

}






// ==============================
// PITCH
// ==============================


function pitchA(v){

deckA.playbackRate=v;

}



function pitchB(v){

deckB.playbackRate=v;

}






// ==============================
// MIXER
// ==============================


function setCross(v){

deckA.volume=1-v;

deckB.volume=v;

}



function setMaster(v){

deckA.volume=v;

deckB.volume=v;

}






// ==============================
// SYNC
// ==============================


function sync(){

deckB.currentTime=
deckA.currentTime;


deckB.playbackRate=
deckA.playbackRate;


}







// ==============================
// EFFECTS
// ==============================


function setFilter(v){

initAudio();

filterA.frequency.value=v;

}



function setEcho(v){

initAudio();

delayA.delayTime.value=v;

}







// ==============================
// EQ
// ==============================


function setBass(v){

initAudio();

eqBass.gain.value=v;

}



function setMid(v){

initAudio();

eqMid.gain.value=v;

}



function setTreble(v){

initAudio();

eqTreble.gain.value=v;

}






// ==============================
// STATUS
// ==============================


console.log(
"IMAN DJ FINAL ENGINE READY"
);
