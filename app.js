// =================================
// IMAN DJ AI STUDIO ENGINE
// VERSION 3
// =================================


let deckA = new Audio();
let deckB = new Audio();

let loopA = false;
let loopB = false;



// LOAD A

function loadTrackA(e){

let file=e.target.files[0];

if(!file)return;

deckA.src=URL.createObjectURL(file);

document.getElementById("trackA").innerHTML=file.name;

}



// LOAD B

function loadTrackB(e){

let file=e.target.files[0];

if(!file)return;

deckB.src=URL.createObjectURL(file);

document.getElementById("trackB").innerHTML=file.name;

}





// PLAY

function playA(){

deckA.play();

spinOn();

}


function playB(){

deckB.play();

spinOn();

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

spinOff();

}


function stopB(){

deckB.pause();

deckB.currentTime=0;

spinOff();

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







// CUE


function cueA(){

deckA.currentTime=0;

deckA.play();

}



function cueB(){

deckB.currentTime=0;

deckB.play();

}







// LOOP


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


showTime("timeA",deckA.currentTime);


});




deckB.addEventListener("timeupdate",()=>{


if(loopB && deckB.currentTime>=deckB.duration){

deckB.currentTime=0;

}


showTime("timeB",deckB.currentTime);


});







// SYNC


function sync(){

deckB.currentTime=deckA.currentTime;

deckB.playbackRate=deckA.playbackRate;

}







// TIME DISPLAY


function showTime(id,time){

let min=Math.floor(time/60);

let sec=Math.floor(time%60);

if(sec<10){

sec="0"+sec;

}


let element=document.getElementById(id);


if(element){

element.innerHTML=min+":"+sec;

}

}








// JOG ROTATION


function spinOn(){

document.querySelectorAll(".jog")
.forEach(x=>x.classList.add("spin"));

}



function spinOff(){

document.querySelectorAll(".jog")
.forEach(x=>x.classList.remove("spin"));

}




console.log("IMAN DJ ENGINE VERSION 3 READY");
