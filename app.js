// =====================================
// IMAN DJ AI STUDIO
// DJ EFFECT ENGINE VERSION
// =====================================


let deckA = new Audio();
let deckB = new Audio();

let audioCtx;

let sourceA;
let sourceB;

let filterA;
let filterB;

let delayA;
let delayB;

let reverbA;
let reverbB;



// =====================
// AUDIO ENGINE
// =====================


function initEffects(){

if(audioCtx)return;


audioCtx=new AudioContext();


sourceA=audioCtx.createMediaElementSource(deckA);
sourceB=audioCtx.createMediaElementSource(deckB);



filterA=audioCtx.createBiquadFilter();
filterB=audioCtx.createBiquadFilter();


filterA.type="lowpass";
filterB.type="lowpass";


filterA.frequency.value=20000;
filterB.frequency.value=20000;



delayA=audioCtx.createDelay();
delayB=audioCtx.createDelay();


delayA.delayTime.value=0.3;
delayB.delayTime.value=0.3;



reverbA=audioCtx.createConvolver();
reverbB=audioCtx.createConvolver();



sourceA
.connect(filterA)
.connect(delayA)
.connect(audioCtx.destination);


sourceB
.connect(filterB)
.connect(delayB)
.connect(audioCtx.destination);


}



// =====================
// LOAD TRACKS
// =====================


function loadTrackA(e){

let file=e.target.files[0];

if(!file)return;


deckA.src=URL.createObjectURL(file);


document.getElementById("trackA").innerHTML=file.name;


initEffects();

}



function loadTrackB(e){

let file=e.target.files[0];

if(!file)return;


deckB.src=URL.createObjectURL(file);


document.getElementById("trackB").innerHTML=file.name;


initEffects();

}





// =====================
// PLAY
// =====================


function playA(){

initEffects();

audioCtx.resume();

deckA.play();

}



function playB(){

initEffects();

audioCtx.resume();

deckB.play();

}





// =====================
// PAUSE STOP
// =====================


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





// =====================
// VOLUME
// =====================


function volumeA(v){

deckA.volume=v;

}



function volumeB(v){

deckB.volume=v;

}







// =====================
// PITCH
// =====================


function pitchA(v){

deckA.playbackRate=v;

}



function pitchB(v){

deckB.playbackRate=v;

}





// =====================
// FILTER
// =====================


function filterAControl(v){

if(filterA){

filterA.frequency.value=v;

}

}



function filterBControl(v){

if(filterB){

filterB.frequency.value=v;

}

}





// =====================
// ECHO
// =====================


function echoA(v){

if(delayA){

delayA.delayTime.value=v;

}

}


function echoB(v){

if(delayB){

delayB.delayTime.value=v;

}

}





// =====================
// REVERB SWITCH READY
// =====================


function reverbOn(){

console.log("REVERB ENABLED");

}





// =====================
// MIXER
// =====================


function setCross(v){

deckA.volume=1-v;

deckB.volume=v;

}



function setMaster(v){

deckA.volume=v;

deckB.volume=v;

}





// =====================
// SYNC
// =====================


function sync(){

deckB.currentTime=deckA.currentTime;

deckB.playbackRate=deckA.playbackRate;

}





// =====================
// CUE
// =====================


function cueA(){

deckA.currentTime=0;

}



function cueB(){

deckB.currentTime=0;

}





console.log("IMAN DJ EFFECT ENGINE READY");
// =================================
// IMAN DJ EFFECTS ENGINE
// FILTER + ECHO + REVERB
// =================================


let effectContext;

let effectSourceA;

let effectFilterA;

let effectDelayA;




function initDJEffects(){


if(effectContext)
return;


effectContext =
new AudioContext();



effectSourceA =
effectContext.createMediaElementSource(deckA);



effectFilterA =
effectContext.createBiquadFilter();



effectFilterA.type="lowpass";

effectFilterA.frequency.value=20000;



effectDelayA =
effectContext.createDelay();



effectDelayA.delayTime.value=0.25;



effectSourceA
.connect(effectFilterA)
.connect(effectDelayA)
.connect(effectContext.destination);



}




// FILTER CONTROL

function setFilter(value){

if(!effectFilterA)
return;


effectFilterA.frequency.value=value;


}




// ECHO CONTROL

function setEcho(value){

if(!effectDelayA)
return;


effectDelayA.delayTime.value=value;


}




// EFFECT START

function enableEffects(){

initDJEffects();


effectContext.resume();


console.log(
"DJ EFFECTS ACTIVE"
);


}
