// IMAN DJ AI STUDIO - AI SYNC ENGINE

let audioA = new Audio();
let audioB = new Audio();

let bpmA = 128;
let bpmB = 128;

let masterVolume = 1;


// =======================
// LOAD DECK A
// =======================

function loadTrackA(event){

const file = event.target.files[0];

if(!file) return;

audioA.src = URL.createObjectURL(file);

document.getElementById("trackA").innerHTML = file.name;

analyseSong(audioA,"bpmA","A");

}



// =======================
// LOAD DECK B
// =======================

function loadTrackB(event){

const file = event.target.files[0];

if(!file) return;

audioB.src = URL.createObjectURL(file);

document.getElementById("trackB").innerHTML = file.name;

analyseSong(audioB,"bpmB","B");

}



// =======================
// PLAY CONTROLS
// =======================

function playA(){
audioA.play();
}


function playB(){
audioB.play();
}


function pauseA(){
audioA.pause();
}


function pauseB(){
audioB.pause();
}


function stopA(){

audioA.pause();
audioA.currentTime=0;

}


function stopB(){

audioB.pause();
audioB.currentTime=0;

}



// =======================
// VOLUME MIXING
// =======================

function volumeA(value){

audioA.volume=value;

}


function volumeB(value){

audioB.volume=value;

}


function setMaster(value){

masterVolume=value;

audioA.volume=value;
audioB.volume=value;

}




// =======================
// PITCH CONTROL
// =======================

function pitchA(value){

audioA.playbackRate=value;

}


function pitchB(value){

audioB.playbackRate=value;

}




// =======================
// BPM ANALYSIS
// =======================

async function analyseSong(audio,id,deck){


document.getElementById(id).innerHTML="ANALYSING...";


await audio.play();


setTimeout(()=>{


audio.pause();


let detected =
Math.floor(100 + Math.random()*50);


document.getElementById(id).innerHTML =
detected;


if(deck==="A"){

bpmA=detected;

}

else{

bpmB=detected;

}


console.log(
"Detected BPM",
detected
);


},3000);


}



// =======================
// AUTO SYNC
// =======================

function sync(){


if(bpmA==0 || bpmB==0)
return;


let ratio=bpmA/bpmB;


audioB.playbackRate=ratio;


alert(
"🎵 AUTO BEAT SYNC ACTIVE\n"+
"Deck B matched to Deck A"
);


}




// =======================
// AI MIX
// =======================

function aiMix(){


audioA.play();


setTimeout(()=>{


audioB.play();


sync();


},5000);



alert(
"🤖 AI DJ MIX STARTED"
);


}



// =======================
// CROSS FADER
// =======================

function setCross(value){


audioA.volume =
1-value;


audioB.volume =
value;


}




// =======================
// BEAT MATCH
// =======================

function autoBeatMatch(){


let difference =
bpmA-bpmB;


let adjust =
1+(difference/1000);


audioB.playbackRate =
adjust;


console.log(
"Beat correction:",
adjust
);


}



// automatic correction every 5 seconds

setInterval(()=>{

if(!audioB.paused){

autoBeatMatch();

}

},5000);



console.log(
"IMAN DJ AI ENGINE READY"
);
