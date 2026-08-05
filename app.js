
// ==================================
// IMAN DJ AI STUDIO AUDIO ENGINE
// ==================================


let deckA = new Audio();
let deckB = new Audio();


let volumeAValue = 1;
let volumeBValue = 1;


let audioContext;
let sourceA;
let sourceB;

let eqA = [];
let eqB = [];



const frequencies = [
20,50,100,250,500,
1000,2000,5000,10000,20000
];



// ==========================
// LOAD TRACKS
// ==========================


function loadTrackA(event){

    let file = event.target.files[0];

    if(file){

        deckA.src = URL.createObjectURL(file);

        document.getElementById("trackA").innerHTML =
        file.name;

    }

}




function loadTrackB(event){

    let file = event.target.files[0];

    if(file){

        deckB.src = URL.createObjectURL(file);

        document.getElementById("trackB").innerHTML =
        file.name;

    }

}



// ==========================
// PLAY CONTROL
// ==========================


function playA(){

    setupAudio();

    deckA.play();

}



function pauseA(){

    deckA.pause();

}



function stopA(){

    deckA.pause();

    deckA.currentTime = 0;

}




function playB(){

    setupAudio();

    deckB.play();

}



function pauseB(){

    deckB.pause();

}



function stopB(){

    deckB.pause();

    deckB.currentTime = 0;

}




// ==========================
// VOLUME
// ==========================


function volumeA(value){

    volumeAValue=value;

    deckA.volume=value;

}



function volumeB(value){

    volumeBValue=value;

    deckB.volume=value;

}




// ==========================
// KEY / PITCH
// ==========================


function keyA(value){

    deckA.playbackRate =
    1 + (value/100);

}



function keyB(value){

    deckB.playbackRate =
    1 + (value/100);

}




// ==========================
// CROSS FADER
// ==========================


function crossfade(value){

    deckA.volume =
    (1-value)*volumeAValue;


    deckB.volume =
    value*volumeBValue;

}




// ==========================
// BEAT SYNC FOUNDATION
// ==========================


function syncDecks(){

    deckB.playbackRate =
    deckA.playbackRate;

    alert("Decks synced");

}





// ==========================
// EQUALIZER ENGINE
// ==========================


function setupAudio(){


if(audioContext) return;


audioContext =
new AudioContext();



sourceA =
audioContext.createMediaElementSource(deckA);



sourceB =
audioContext.createMediaElementSource(deckB);



frequencies.forEach((freq)=>{


let filterA =
audioContext.createBiquadFilter();


filterA.type="peaking";
filterA.frequency.value=freq;
filterA.gain.value=0;



let filterB =
audioContext.createBiquadFilter();


filterB.type="peaking";
filterB.frequency.value=freq;
filterB.gain.value=0;



eqA.push(filterA);
eqB.push(filterB);



});



connectChain(sourceA,eqA);

connectChain(sourceB,eqB);


}




function connectChain(source,filters){


let node=source;


filters.forEach(filter=>{

node.connect(filter);

node=filter;

});


node.connect(audioContext.destination);


}





function changeEQ(index,value){


if(!audioContext){

setupAudio();

}



eqA[index].gain.value=value;

eqB[index].gain.value=value;


}



console.log(
"IMAN DJ AI STUDIO READY"
);
