// IMAN DJ AI STUDIO ENGINE

let decks = {
A:{
audio:null,
playing:false,
volume:1
},
B:{
audio:null,
playing:false,
volume:1
}
};


function loadTrack(deck,input){

let file=input.files[0];

if(!file)return;

decks[deck].audio=new Audio(URL.createObjectURL(file));

document.getElementById(
"track"+deck
).innerHTML=file.name;

}


function playTrack(deck){

let d=decks[deck];

if(d.audio){

d.audio.volume=d.volume;

d.audio.play();

d.playing=true;

}

}


function pauseTrack(deck){

let d=decks[deck];

if(d.audio){

d.audio.pause();

d.playing=false;

}

}


function stopTrack(deck){

let d=decks[deck];

if(d.audio){

d.audio.pause();

d.audio.currentTime=0;

d.playing=false;

}

}


function setVolume(deck,value){

decks[deck].volume=value/100;

if(decks[deck].audio){

decks[deck].audio.volume=value/100;

}

}



function effectOn(name){

alert(name+" activated");

}



function sync(){

alert("SYNC BPM");

}



console.log(
"IMAN DJ AI STUDIO READY"
);
