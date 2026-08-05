// =======================================
// IMAN DJ AI STUDIO ENGINE
// VERSION 2 - DJ CONTROLS
// =======================================


let deckA = new Audio();
let deckB = new Audio();


let cross = 0.5;
let master = 1;


// ===============================
// LOAD TRACK A
// ===============================

function loadTrackA(e){

let file = e.target.files[0];

if(!file) return;


deckA.src = URL.createObjectURL(file);

deckA.load();


document.getElementById("trackA").innerHTML=file.name;

}




// ===============================
// LOAD TRACK B
// ===============================


function loadTrackB(e){

let file = e.target.files[0];

if(!file) return;


deckB.src = URL.createObjectURL(file);

deckB.load();


document.getElementById("trackB").innerHTML=file.name;

}






// ===============================
// PLAY
// ===============================


function playA(){

deckA.play();

startSpin();

}



function playB(){

deckB.play();

startSpin();

}





// ===============================
// PAUSE
// ===============================


function pauseA(){

deckA.pause();

stopSpin();

}



function pauseB(){

deckB.pause();

stopSpin();

}







// ===============================
// STOP
// ===============================


function stopA(){

deckA.pause();

deckA.currentTime=0;

stopSpin();

}



function stopB(){

deckB.pause();

deckB.currentTime=0;

stopSpin();

}







// ===============================
// VOLUME
// ===============================


function volumeA(v){

deckA.volume=v;

}



function volumeB(v){

deckB.volume=v;

}







// ===============================
// PITCH
// ===============================


function pitchA(v){

deckA.playbackRate=v;

}



function pitchB(v){

deckB.playbackRate=v;

}








// ===============================
// CROSS FADER
// ===============================


function setCross(v){

cross=v;


deckA.volume=(1-v)*master;

deckB.volume=v*master;


}






// ===============================
// MASTER
// ===============================


function setMaster(v){

master=v;


deckA.volume=master;

deckB.volume=master;

}








// ===============================
// SYNC
// ===============================


function sync(){


deckB.currentTime=deckA.currentTime;


console.log("SYNC COMPLETE");


}








// ===============================
// JOG WHEEL
// ===============================


function startSpin(){

document.querySelectorAll(".jog")
.forEach(j=>{

j.classList.add("spin");

});


}



function stopSpin(){

document.querySelectorAll(".jog")
.forEach(j=>{

j.classList.remove("spin");

});

}




console.log("IMAN DJ ENGINE READY");
