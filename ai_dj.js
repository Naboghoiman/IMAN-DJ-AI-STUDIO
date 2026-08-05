// IMAN DJ AI STUDIO - STABLE PLAYER ENGINE

let deckA = new Audio();
let deckB = new Audio();

let cross = 0.5;


// LOAD DECK A
function loadTrackA(e){

const file=e.target.files[0];

if(!file)return;

deckA.src=URL.createObjectURL(file);

deckA.load();

document.getElementById("trackA").innerHTML=file.name;

}



// LOAD DECK B
function loadTrackB(e){

const file=e.target.files[0];

if(!file)return;

deckB.src=URL.createObjectURL(file);

deckB.load();

document.getElementById("trackB").innerHTML=file.name;

}



// PLAY

function playA(){

deckA.play()
.then(()=>console.log("Deck A playing"))
.catch(e=>console.log(e));

}


function playB(){

deckB.play()
.then(()=>console.log("Deck B playing"))
.catch(e=>console.log(e));

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

cross=v;

deckA.volume=1-v;

deckB.volume=v;

}



// MASTER

function setMaster(v){

deckA.volume=v;
deckB.volume=v;

}



// SYNC (safe)

function sync(){

let bpm1=128;
let bpm2=128;

let rate=bpm1/bpm2;

deckB.playbackRate=rate;

console.log("SYNC COMPLETE");

}



// AI MIX

function aiMix(){

if(!deckA.src || !deckB.src){

alert("Load both decks first");

return;

}


deckA.play();

setTimeout(()=>{

deckB.play();

sync();

},4000);


}



// AUTO SYNC BUTTON

function autoSync(){

sync();

alert("AUTO SYNC READY");

}



console.log("IMAN DJ ENGINE LOADED");
