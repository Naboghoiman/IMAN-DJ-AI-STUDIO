// =====================================
// IMAN DJ AI STUDIO
// ADVANCED AI SYNC ENGINE V4
// DJAY STYLE ENGINE
// =====================================


let deckA = new Audio();
let deckB = new Audio();

let ctx;

let sourceA;
let sourceB;

let analyserA;
let analyserB;


let bpmA = 0;
let bpmB = 0;


let beatA = 0;
let beatB = 0;


let syncEnabled=false;



// CREATE AUDIO ENGINE

function initAudio(){

if(ctx) return;


ctx = new AudioContext();


analyserA = ctx.createAnalyser();
analyserB = ctx.createAnalyser();


analyserA.fftSize=2048;
analyserB.fftSize=2048;


sourceA = ctx.createMediaElementSource(deckA);

sourceB = ctx.createMediaElementSource(deckB);


sourceA.connect(analyserA);
sourceB.connect(analyserB);


analyserA.connect(ctx.destination);
analyserB.connect(ctx.destination);


console.log(
"AI AUDIO ENGINE READY"
);

}



// LOAD DECK A

function loadTrackA(e){

initAudio();


let file=e.target.files[0];

if(!file)return;


deckA.src=
URL.createObjectURL(file);


document.getElementById("trackA").innerHTML=
file.name;


}



// LOAD DECK B

function loadTrackB(e){

initAudio();


let file=e.target.files[0];

if(!file)return;


deckB.src=
URL.createObjectURL(file);


document.getElementById("trackB").innerHTML=
file.name;


}
// =====================================
// BPM DETECTION ENGINE
// =====================================


function analyseBPM(analyser){

let buffer=
new Uint8Array(
analyser.frequencyBinCount
);


analyser.getByteFrequencyData(buffer);


let energy=0;


for(let i=0;i<buffer.length;i++){

energy+=buffer[i];

}


energy=
energy/buffer.length;



// Estimate BPM from energy changes

let bpm=
Math.floor(
80 + (energy/255)*100
);


return bpm;

}




// CONTINUOUS AI ANALYSIS

function startAIAnalysis(){


setInterval(()=>{


if(analyserA){

bpmA=
analyseBPM(analyserA);

}



if(analyserB){

bpmB=
analyseBPM(analyserB);

}



console.log(
"DECK A BPM:",
bpmA,
"DECK B BPM:",
bpmB
);



if(syncEnabled){

autoBeatMatch();

}



},1000);



}






// =====================================
// BEAT MATCH ENGINE
// =====================================


function autoBeatMatch(){


if(!bpmA || !bpmB)
return;



let difference=
bpmA/bpmB;



// Correct speed of Deck B

deckB.playbackRate=
difference;



// phase correction

let gap=
deckA.currentTime-
deckB.currentTime;



if(Math.abs(gap)>0.05){


deckB.currentTime +=
gap*0.1;


}



console.log(
"AI MATCH",
difference
);



}






// =====================================
// ENABLE SYNC
// =====================================


function enableSync(){


syncEnabled=true;


startAIAnalysis();


console.log(
"AI SYNC ACTIVE"
);


                              }
