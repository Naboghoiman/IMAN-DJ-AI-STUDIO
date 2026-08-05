// IMAN DJ AI STUDIO
// Audio Engine

let deckA = new Audio();
let deckB = new Audio();

let gainA = 1;
let gainB = 1;

let cross = 0.5;
let master = 1;


// =======================
// LOAD TRACKS
// =======================

function loadDeck(input, deck){

    let file = input.files[0];

    if(!file) return;

    let url = URL.createObjectURL(file);

    if(deck === "A"){

        deckA.src = url;

        document.querySelector(".trackA").innerHTML =
        file.name;

    }


    if(deck === "B"){

        deckB.src = url;

        document.querySelector(".trackB").innerHTML =
        file.name;

    }

}



// =======================
// PLAY CONTROLS
// =======================


function playA(){

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

    deckB.play();

}


function pauseB(){

    deckB.pause();

}


function stopB(){

    deckB.pause();
    deckB.currentTime = 0;

}




// =======================
// VOLUME
// =======================


function volumeA(value){

    gainA=value;

    deckA.volume =
    gainA * (1-cross) * master;

}



function volumeB(value){

    gainB=value;

    deckB.volume =
    gainB * cross * master;

}





// =======================
// CROSS FADER
// =======================


function crossFader(value){

    cross=value;


    deckA.volume =
    gainA * (1-cross) * master;


    deckB.volume =
    gainB * cross * master;


}






// =======================
// MASTER
// =======================


function masterVolume(value){

    master=value;

    deckA.volume =
    gainA * (1-cross) * master;


    deckB.volume =
    gainB * cross * master;

}







// =======================
// PITCH CONTROL
// =======================


function pitchA(value){

    deckA.playbackRate=value;

}



function pitchB(value){

    deckB.playbackRate=value;

}






// =======================
// EFFECTS
// =======================


let effects={

reverb:false,

delay:false,

warmer:false,

xciter:false,

max:false

};




function toggleEffect(name){


effects[name]=!effects[name];


console.log(
name,
effects[name]
);


}






// =======================
// MASTER METER
// =======================


setInterval(()=>{


let meter =
document.querySelector(".level");


if(meter){

let height =
Math.random()*80+20;


meter.style.height =
height+"%";

}


},200);







// =======================
// BUTTON CONNECTIONS
// =======================



window.onload=function(){


console.log(
"IMAN DJ AI STUDIO READY"
);


}
