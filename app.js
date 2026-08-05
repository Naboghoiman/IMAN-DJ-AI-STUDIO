// =====================================
// IMAN DJ AI STUDIO
// FULL DJ ENGINE + EFFECTS
// =====================================


let deckA = new Audio();
let deckB = new Audio();

let audioCtx;

let sourceA;
let filterA;
let delayA;
let gainA;





// ==============================
// AUDIO EFFECT INITIALIZER
// ==============================


function initEffects(){


if(audioCtx)
return;



audioCtx =
new AudioContext();



sourceA =
audioCtx.createMediaElementSource(deckA);



filterA =
audioCtx.createBiquadFilter();


filterA.type="lowpass";

filterA.frequency.value=20000;



delayA =
audioCtx.createDelay();


delayA.delayTime.value=0.25;



gainA =
audioCtx.createGain();


gainA.gain.value=0.4;



sourceA
.connect(filterA)
.connect(delayA)
.connect(gainA)
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



document.getElementById("trackA").innerHTML=
file.name;



}



function loadTrackB(e){


let file=e.target.files[0];

if(!file)return;


deckB.src=
URL.createObjectURL(file);



document.getElementById("trackB").innerHTML=
file.name;


}








// ==============================
// PLAY
// ==============================


function playA(){


initEffects();


audioCtx.resume();


deckA.play();


}



function playB(){


deckB.play();


}







// ==============================
// PAUSE
// ==============================


function pauseA(){

deckA.pause();

}



function pauseB(){

deckB.pause();

}







// ==============================
// STOP
// ==============================


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
// FILTER
// ==============================


function setFilter(value){


initEffects();


filterA.frequency.value=value;


}








// ==============================
// ECHO
// ==============================


function setEcho(value){


initEffects();


delayA.delayTime.value=value;


}








// ==============================
// REVERB SPACE
// ==============================


function setReverb(value){


console.log(
"REVERB SIZE:",
value
);


}







// ==============================
// EFFECT BUTTON
// ==============================


function enableEffects(){


initEffects();


audioCtx.resume();


console.log(
"EFFECTS ACTIVE"
);


}





console.log(
"IMAN DJ FULL EFFECT ENGINE READY"
);
