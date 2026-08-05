// IMAN DJ AI STUDIO CONTROL ENGINE


let decks = {

A:{
audio:null,
volume:0.8
},

B:{
audio:null,
volume:0.8
}

};



// LOAD MUSIC

function loadTrack(deck,input){

let file=input.files[0];

if(!file)return;


decks[deck].audio = new Audio(
URL.createObjectURL(file)
);


document.getElementById(
"track"+deck
).innerHTML=file.name;


}




// PLAY

function playTrack(deck){

let player=decks[deck].audio;

if(player){

player.volume=decks[deck].volume;

player.play();

}

}



// PAUSE

function pauseTrack(deck){

let player=decks[deck].audio;

if(player){

player.pause();

}

}



// STOP

function stopTrack(deck){

let player=decks[deck].audio;

if(player){

player.pause();

player.currentTime=0;

}

}




// VOLUME

function setVolume(deck,value){

decks[deck].volume=value/100;

}



// SYNC

function sync(){

alert("BPM SYNC READY");

}





// RCF MENU CONTROL


function showPanel(panel){


let panels=document.querySelectorAll(
".panel"
);


panels.forEach(p=>{

p.style.display="none";

});



let selected=document.getElementById(panel);


if(selected){

selected.style.display="block";

}


}





console.log(
"IMAN DJ AI STUDIO READY"
);
