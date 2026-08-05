let deckA = new Audio();
let deckB = new Audio();

let currentA = false;


// LOAD DECK A
function loadA(file){
    deckA.src = URL.createObjectURL(file);
    currentA=true;
}

// LOAD DECK B
function loadB(file){
    deckB.src = URL.createObjectURL(file);
    currentA=false;
}


// PLAY
function playA(){
    deckA.play();
}

function playB(){
    deckB.play();
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

function volumeA(value){
    deckA.volume=value;
}

function volumeB(value){
    deckB.volume=value;
}


// PITCH CONTROL

function pitchA(value){
    deckA.playbackRate=value;
}

function pitchB(value){
    deckB.playbackRate=value;
}



// EFFECT ENGINE

const audioCtx = new AudioContext();

let reverb=false;
let delay=false;
let filter=false;


function toggleReverb(){

reverb=!reverb;

alert("Hall Reverb "+(reverb?"ON":"OFF"));

}


function toggleDelay(){

delay=!delay;

alert("Digital Delay "+(delay?"ON":"OFF"));

}


function toggleFilter(){

filter=!filter;

alert("RCF Filter "+(filter?"ON":"OFF"));

}
