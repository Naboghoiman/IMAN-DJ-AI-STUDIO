// ======================================
// IMAN DJ AI STUDIO
// RCF AUDIO ENGINE
// ======================================


const ctx = new AudioContext();


let deckA = new Audio();
let deckB = new Audio();


let sourceA;
let sourceB;


let masterGain = ctx.createGain();


// EFFECTS

let reverb = ctx.createConvolver();

let delay = ctx.createDelay();

let filter = ctx.createBiquadFilter();



// EQ

let eqBands=[];



// MASTER

masterGain.connect(ctx.destination);




// CREATE EQ BANDS

for(let i=0;i<31;i++){

let eq = ctx.createBiquadFilter();

eq.type="peaking";

eq.frequency.value =
20 + (i*250);

eq.gain.value=0;

eq.Q.value=1;


eqBands.push(eq);

}




// CONNECT AUDIO


function connectDeck(audio,type){


let source =
ctx.createMediaElementSource(audio);



let chain = source;



eqBands.forEach(eq=>{

chain.connect(eq);

chain=eq;

});



chain.connect(filter);

chain.connect(delay);

chain.connect(reverb);

chain.connect(masterGain);



if(type==="A"){
sourceA=source;
}

else{
sourceB=source;
}


}






// LOAD A


function loadA(file){


if(!file)return;


deckA.src=
URL.createObjectURL(file);


if(!sourceA)
connectDeck(deckA,"A");


document.getElementById("trackA").innerHTML=
file.name;


}





// LOAD B


function loadB(file){


if(!file)return;


deckB.src=
URL.createObjectURL(file);



if(!sourceB)
connectDeck(deckB,"B");


document.getElementById("trackB").innerHTML=
file.name;


}







// CONTROLS


function playA(){

ctx.resume();

deckA.play();

}


function playB(){

ctx.resume();

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






// EFFECT BUTTONS


function toggleReverb(){

reverb.normalize=true;

alert("HALL REVERB ON");

}




function toggleDelay(){

delay.delayTime.value=0.35;

alert("DIGITAL DELAY ON");

}




function toggleFilter(){

filter.type="lowpass";

filter.frequency.value=1000;

alert("FILTER ON");

}





// EQ SLIDERS


document.querySelectorAll(".eq input")
.forEach((slider,index)=>{


slider.oninput=function(){


if(eqBands[index]){

eqBands[index].gain.value=
this.value;

}


}


});



console.log(
"RCF AUDIO ENGINE READY"
);
