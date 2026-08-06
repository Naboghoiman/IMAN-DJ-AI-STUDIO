// =====================================
// IMAN DJ AI STUDIO
// RCF AUDIO ENGINE
// =====================================


let deckA = document.getElementById("audioA");
let deckB = document.getElementById("audioB");


let ctx = new AudioContext();


let sourceA;
let sourceB;


let masterA;
let masterB;


let filterA;
let filterB;


let delayA;
let delayB;


let reverbA;
let reverbB;



// CREATE AUDIO CHAIN

function setupDeck(audio,type){


let source =
ctx.createMediaElementSource(audio);


let gain =
ctx.createGain();


let filter =
ctx.createBiquadFilter();


let delay =
ctx.createDelay();


filter.type="lowpass";

filter.frequency.value=20000;


delay.delayTime.value=0.25;


source
.connect(filter)
.connect(delay)
.connect(gain)
.connect(ctx.destination);



if(type==="A"){

sourceA=source;

masterA=gain;

filterA=filter;

delayA=delay;

}


else{

sourceB=source;

masterB=gain;

filterB=filter;

delayB=delay;

}


}




// LOAD MUSIC


document
.getElementById("fileA")
.onchange=function(e){


let file=e.target.files[0];

deckA.src=
URL.createObjectURL(file);


document.getElementById("trackA")
.innerHTML=file.name;


if(!sourceA)

setupDeck(deckA,"A");


}




document
.getElementById("fileB")
.onchange=function(e){


let file=e.target.files[0];

deckB.src=
URL.createObjectURL(file);


document.getElementById("trackB")
.innerHTML=file.name;


if(!sourceB)

setupDeck(deckB,"B");


}







// PLAY


function playA(){

ctx.resume();

deckA.play();

}


function playB(){

ctx.resume();

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







// EFFECTS


function hallReverb(value){

if(reverbA)

reverbA.value=value;

}



function digitalDelay(value){

if(delayA)

delayA.delayTime.value=value;

}




function filterControl(value){

if(filterA)

filterA.frequency.value=value;

}







// MASTER VOLUME


function masterVolume(value){

if(masterA)

masterA.gain.value=value;


if(masterB)

masterB.gain.value=value;

}





console.log(
"RCF AUDIO SYSTEM READY"
);
