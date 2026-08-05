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
