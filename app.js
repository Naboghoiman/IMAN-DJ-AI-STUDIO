// =====================================
// IMAN DJ AI STUDIO
// FULL DJ ENGINE
// =====================================


let deckA = new Audio();
let deckB = new Audio();


let loopA = false;
let loopB = false;



// =====================
// LOAD TRACKS
// =====================


function loadTrackA(e){

let file=e.target.files[0];

if(!file)return;

deckA.src=URL.createObjectURL(file);

document.getElementById("trackA").innerHTML=file.name;

}



function loadTrackB(e){

let file=e.target.files[0];

if(!file)return;

deckB.src=URL.createObjectURL(file);

document.getElementById("trackB").innerHTML=file.name;

}




// =====================
// PLAY
// =====================


function playA(){

deckA.play();

}



function playB(){

deckB.play();

}





// =====================
// PAUSE
// =====================


function pauseA(){

deckA.pause();

}



function pauseB(){

deckB.pause();

}





// =====================
// STOP
// =====================


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
// PITCH CONTROL
// =====================


function pitchA(v){

deckA.playbackRate=v;

}



function pitchB(v){

deckB.playbackRate=v;

}






// =====================
// KEY LOCK
// =====================


function keyLockA(){

deckA.preservesPitch=true;

}



function keyLockB(){

deckB.preservesPitch=true;

}






// =====================
// CROSS FADER
// =====================


function setCross(v){

deckA.volume=1-v;

deckB.volume=v;

}






// =====================
// MASTER
// =====================


function setMaster(v){

deckA.volume=v;

deckB.volume=v;

}





// =====================
// CUE
// =====================


function cueA(){

deckA.currentTime=0;

deckA.play();

}



function cueB(){

deckB.currentTime=0;

deckB.play();

}







// =====================
// LOOP
// =====================


function loopTrackA(){

loopA=!loopA;

}



function loopTrackB(){

loopB=!loopB;

}




deckA.addEventListener("timeupdate",()=>{

if(loopA && deckA.currentTime>=deckA.duration){

deckA.currentTime=0;

}

});



deckB.addEventListener("timeupdate",()=>{

if(loopB && deckB.currentTime>=deckB.duration){

deckB.currentTime=0;

}

});







// =====================
// SYNC
// =====================


function sync(){

deckB.currentTime=deckA.currentTime;

deckB.playbackRate=deckA.playbackRate;

}





function autoSync(){

sync();

alert("AUTO SYNC COMPLETE");

}







// =====================
// MASTER TEMPO
// =====================


function masterTempo(v){

deckA.playbackRate=v;

deckB.playbackRate=v;

}







// =====================
// STATUS
// =====================


deckA.addEventListener("play",()=>{

console.log("DECK A PLAYING");

});



deckB.addEventListener("play",()=>{

console.log("DECK B PLAYING");

});





console.log("IMAN DJ AI STUDIO FULL ENGINE READY");
