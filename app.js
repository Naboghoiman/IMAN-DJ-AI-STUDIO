// ======================================
// IMAN DJ AI STUDIO
// STABLE AUDIO PLAYER ENGINE
// ======================================


let deckA = new Audio();
let deckB = new Audio();

let volumeDeckA = 1;
let volumeDeckB = 1;
let crossFader = 0.5;
let masterVolume = 1;




// ===============================
// LOAD DECK A
// ===============================

function loadTrackA(event){

    let file = event.target.files[0];

    if(!file) return;


    deckA.src = URL.createObjectURL(file);

    deckA.load();


    let display = document.getElementById("trackA");

    if(display){
        display.innerHTML = file.name;
    }

}




// ===============================
// LOAD DECK B
// ===============================

function loadTrackB(event){

    let file = event.target.files[0];

    if(!file) return;


    deckB.src = URL.createObjectURL(file);

    deckB.load();


    let display = document.getElementById("trackB");

    if(display){
        display.innerHTML = file.name;
    }

}






// ===============================
// PLAY
// ===============================

function playA(){

    deckA.play();

}



function playB(){

    deckB.play();

}






// ===============================
// PAUSE
// ===============================

function pauseA(){

    deckA.pause();

}



function pauseB(){

    deckB.pause();

}







// ===============================
// STOP
// ===============================

function stopA(){

    deckA.pause();

    deckA.currentTime = 0;

}



function stopB(){

    deckB.pause();

    deckB.currentTime = 0;

}







// ===============================
// VOLUME
// ===============================


function volumeA(value){

    volumeDeckA = value;

    updateMixer();

}



function volumeB(value){

    volumeDeckB = value;

    updateMixer();

}







// ===============================
// CROSS FADER
// ===============================


function setCross(value){

    crossFader = value;

    updateMixer();

}






// ===============================
// MASTER
// ===============================


function setMaster(value){

    masterVolume = value;

    updateMixer();

}






function updateMixer(){

    deckA.volume =
    volumeDeckA *
    (1-crossFader) *
    masterVolume;


    deckB.volume =
    volumeDeckB *
    crossFader *
    masterVolume;

}






// ===============================
// PITCH
// ===============================


function pitchA(value){

    deckA.playbackRate = value;

}



function pitchB(value){

    deckB.playbackRate = value;

}







// ===============================
// BASIC SYNC
// ===============================


function sync(){

    deckB.currentTime =
    deckA.currentTime;

    console.log("SYNC COMPLETE");

}







// ===============================
// AI MIX PLACEHOLDER
// ===============================


function AI_MIX(){

    alert(
    "AI MIX READY - ENGINE CONNECTING"
    );

}





console.log(
"IMAN DJ STUDIO PLAYER READY"
);
