// IMAN DJ AI ENGINE
// Beat matching foundation


let aiBPM_A = 128;
let aiBPM_B = 128;

let beatInterval;



// Detect beat timing from BPM

function startBeatClock(){

let interval =
60000 / aiBPM_A;


clearInterval(beatInterval);


beatInterval=setInterval(()=>{

console.log("BEAT");

},interval);


}




// Set Deck BPM

function setDeckABPM(value){

aiBPM_A=value;

}



function setDeckBBPM(value){

aiBPM_B=value;

}





// Automatic tempo matching

function matchTempo(){


if(!deckB){

return;

}



let ratio =
aiBPM_A / aiBPM_B;


deckB.playbackRate =
ratio;



console.log(
"Tempo matched:",
ratio
);


}





// AI transition

function smartMix(){


matchTempo();



if(deckB.paused){

deckB.play();

}



let amount=0;


let fade=setInterval(()=>{


amount +=0.02;


if(amount>=1){

clearInterval(fade);

}


deckA.volume=
1-amount;


deckB.volume=
amount;



},100);



}




console.log(
"AI ENGINE READY"
);
