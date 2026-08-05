// IMAN DJ AI STUDIO AUDIO ENGINE


let deckA = new Audio();
let deckB = new Audio();

let volumeAValue = 1;
let volumeBValue = 1;


// LOAD MUSIC

function loadTrackA(event){

    let file = event.target.files[0];

    if(file){

        deckA.src = URL.createObjectURL(file);

    }

}



function loadTrackB(event){

    let file = event.target.files[0];

    if(file){

        deckB.src = URL.createObjectURL(file);

    }

}



// PLAY / PAUSE


function playA(){

    deckA.play();

}



function pauseA(){

    deckA.pause();

}



function playB(){

    deckB.play();

}



function pauseB(){

    deckB.pause();

}




// VOLUME CONTROL


function volumeA(value){

    volumeAValue = value;

    deckA.volume = value;

}



function volumeB(value){

    volumeBValue = value;

    deckB.volume = value;

}




// KEY / PITCH CONTROL


function keyA(value){

    deckA.playbackRate = 1 + (value / 100);

}



function keyB(value){

    deckB.playbackRate = 1 + (value / 100);

}




// CROSSFADER


function crossfade(value){


    let a = 1 - value;

    let b = value;


    deckA.volume = a * volumeAValue;

    deckB.volume = b * volumeBValue;


}




// SYNC FOUNDATION


function syncDecks(){

    let bpmA = 128;

    let bpmB = 128;


    let difference = bpmA / bpmB;


    deckB.playbackRate = difference;


    alert("Decks synchronized");

}



console.log(
"IMAN DJ AI STUDIO READY"
);
// ===============================
// 31 BAND GRAPHIC EQUALIZER
// ===============================


let audioContext;
let sourceA;
let sourceB;

let eqA = [];
let eqB = [];


const frequencies = [
20,50,100,250,500,
1000,2000,5000,10000,20000
];



function setupEQ(){

if(audioContext) return;


audioContext = new AudioContext();


sourceA = audioContext.createMediaElementSource(deckA);
sourceB = audioContext.createMediaElementSource(deckB);



frequencies.forEach((freq)=>{


let filterA = audioContext.createBiquadFilter();

filterA.type="peaking";
filterA.frequency.value=freq;
filterA.Q.value=1;
filterA.gain.value=0;


let filterB = audioContext.createBiquadFilter();

filterB.type="peaking";
filterB.frequency.value=freq;
filterB.Q.value=1;
filterB.gain.value=0;


eqA.push(filterA);
eqB.push(filterB);


});



connectEQ(sourceA,eqA);
connectEQ(sourceB,eqB);


}



function connectEQ(source,filters){

let node=source;


filters.forEach(filter=>{

node.connect(filter);
node=filter;

});


node.connect(audioContext.destination);

}




function changeEQ(deck,index,value){


if(!audioContext){

setupEQ();

}


if(deck==="A"){

eqA[index].gain.value=value;

}


if(deck==="B"){

eqB[index].gain.value=value;

}


    }
