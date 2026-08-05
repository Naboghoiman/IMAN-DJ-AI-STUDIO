// IMAN DJ AI STUDIO - Audio Engine

let deckA = new Audio();
let deckB = new Audio();

let fileA = null;
let fileB = null;


// LOAD TRACKS

function loadDeckA(event){
    fileA = URL.createObjectURL(event.target.files[0]);
    deckA.src = fileA;
}


function loadDeckB(event){
    fileB = URL.createObjectURL(event.target.files[0]);
    deckB.src = fileB;
}


// PLAY / PAUSE

function playA(){
    deckA.play();
}

function pauseA(){
    deckA.pause();
}


function playB(){
    deckB.play();
}

function pauseB(){
    deckB.pause();
}


// VOLUME

function volumeA(value){
    deckA.volume = value;
}


function volumeB(value){
    deckB.volume = value;
}


// KEY / PITCH CONTROL

function keyA(value){
    deckA.playbackRate = value;
}


function keyB(value){
    deckB.playbackRate = value;
}


// CROSSFADE

function crossfade(value){

    let a = value;
    let b = 1 - value;

    deckA.volume = a;
    deckB.volume = b;

}


console.log("IMAN DJ AI AUDIO ENGINE READY");
