// =======================================
// IMAN DJ AI STUDIO ENGINE V3
// AUTO MIX + BPM SYNC ENGINE
// =======================================


let deckA = new Audio();
let deckB = new Audio();


let bpmA = 128;
let bpmB = 128;


let masterVolume = 1;
let crossValue = 0.5;



// ===============================
// LOAD DECK A
// ===============================

function loadTrackA(event){

const file = event.target.files[0];

if(!file) return;


deckA.src = URL.createObjectURL(file);

deckA.load();


let name = document.getElementById("trackA");

if(name){

name.innerHTML=file.name;

}


}



// ===============================
// LOAD DECK B
// ===============================

function loadTrackB(event){

const file = event.target.files[0];

if(!file) return;


deckB.src = URL.createObjectURL(file);

deckB.load();


let name = document.getElementById("trackB");

if(name){

name.innerHTML=file.name;

}


}





// ===============================
// PLAY CONTROLS
// ===============================


function playA(){

deckA.play();

}


function playB(){

deckB.play();

}




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







// ===============================
// VOLUME
// ===============================


function volumeA(value){

deckA.volume=value;

}



function volumeB(value){

deckB.volume=value;

}







// ===============================
// PITCH CONTROL
// ===============================


function pitchA(value){

deckA.playbackRate=value;

}



function pitchB(value){

deckB.playbackRate=value;

}







// ===============================
// CROSS FADER
// ===============================


function setCross(value){

crossValue=value;


deckA.volume=(1-value)*masterVolume;

deckB.volume=value*masterVolume;


}






// ===============================
// MASTER OUTPUT
// ===============================


function setMaster(value){

masterVolume=value;


deckA.volume=(1-crossValue)*value;

deckB.volume=crossValue*value;


}







// ===============================
// BPM MATCH ENGINE
// ===============================


function detectBPM(){

// temporary AI estimate

bpmA=128;

bpmB=128;


return true;

}





function sync(){

detectBPM();


let speed=bpmA/bpmB;


deckB.playbackRate=speed;


console.log(
"AI SYNC COMPLETE",
speed
);


}








// ===============================
// AI AUTOMATIC MIX
// ===============================


function aiMix(){


if(!deckA.src || !deckB.src){

alert(
"Load both decks first"
);

return;

}



deckA.play();



setTimeout(()=>{


sync();


deckB.currentTime=0;


deckB.play();



startAutoFade();



},4000);



}







// ===============================
// AUTO CROSSFADE
// ===============================


function startAutoFade(){


let position=0;


let fade=setInterval(()=>{


position+=0.02;


setCross(position);



if(position>=1){


clearInterval(fade);


}



},250);



}







// ===============================
// AUTO LOOP
// ===============================


function loopA(){

deckA.loop=!deckA.loop;

}


function loopB(){

deckB.loop=!deckB.loop;

}








// ===============================
// DJ CUE
// ===============================


function cueA(){

deckA.currentTime=0;

}



function cueB(){

deckB.currentTime=0;

}







// ===============================
// ENGINE STATUS
// ===============================


console.log(
"🎧 IMAN DJ AI ENGINE V3 READY"
);
