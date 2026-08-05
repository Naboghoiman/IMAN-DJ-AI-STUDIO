// ======================================
// IMAN DJ AI STUDIO
// AUDIO ENGINE
// ======================================


let deckA = new Audio();
let deckB = new Audio();

let reverbOn = false;
let delayOn = false;
let filterOn = false;



// LOAD DECK A

function loadA(file){

if(!file) return;

deckA.src = URL.createObjectURL(file);

let name=document.getElementById("trackA");

if(name){

name.innerHTML=file.name;

}

}





// LOAD DECK B

function loadB(file){

if(!file) return;

deckB.src = URL.createObjectURL(file);

let name=document.getElementById("trackB");

if(name){

name.innerHTML=file.name;

}

}





// PLAY

function playA(){

deckA.play();

}



function playB(){

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







// SYNC


function sync(){

deckB.currentTime=
deckA.currentTime;

deckB.playbackRate=
deckA.playbackRate;

}






// EFFECT BUTTONS


function toggleReverb(){

reverbOn=!reverbOn;

console.log(
"Reverb:",
reverbOn
);

}




function toggleDelay(){

delayOn=!delayOn;

console.log(
"Delay:",
delayOn
);

}




function toggleFilter(){

filterOn=!filterOn;

console.log(
"Filter:",
filterOn
);

}





console.log(
"IMAN DJ ENGINE READY"
);
