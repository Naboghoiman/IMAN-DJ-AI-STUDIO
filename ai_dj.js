// IMAN DJ AI STUDIO - STABLE AUDIO ENGINE


let deckA = new Audio();
let deckB = new Audio();

let cross = 0.5;



function loadTrackA(event){

let file = event.target.files[0];

if(!file) return;


deckA.src =
URL.createObjectURL(file);


document.getElementById("trackA").innerHTML =
file.name;

}





function loadTrackB(event){

let file = event.target.files[0];

if(!file) return;


deckB.src =
URL.createObjectURL(file);


document.getElementById("trackB").innerHTML =
file.name;

}





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





function volumeA(value){

deckA.volume=value;

}




function volumeB(value){

deckB.volume=value;

}





function pitchA(value){

deckA.playbackRate=value;

}



function pitchB(value){

deckB.playbackRate=value;

}





function setCross(value){

cross=value;


deckA.volume=1-value;

deckB.volume=value;

}





function setMaster(value){

deckA.volume=value;

deckB.volume=value;

}





function sync(){

console.log(
"SYNC READY"
);

}





function AI_MIX(){

alert(
"AI MIX MODULE READY"
);

}





console.log(
"IMAN DJ STABLE ENGINE LOADED"
);
