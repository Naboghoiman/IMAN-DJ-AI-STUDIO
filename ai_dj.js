// IMAN DJ AI MIX ENGINE


let targetBPM_A = 128;
let targetBPM_B = 128;



// AUTO BPM MATCH

function autoBeatMatch(){


if(!audioA || !audioB){

return;

}



let ratio =
targetBPM_A / targetBPM_B;



audioB.playbackRate = ratio;



document.getElementById("aiStatus").innerHTML =
"AI BPM MATCH ACTIVE";


}




// AI TRANSITION

function AI_MIX(){


autoBeatMatch();



audioB.play();



let fade = 0;



let transition = setInterval(()=>{


fade += 0.02;


if(fade >= 1){


clearInterval(transition);


}



if(typeof setCross === "function"){


setCross(fade);


}



},100);



document.getElementById("aiStatus").innerHTML =
"AI MIXING...";


}





// BPM SETUP

function setBPM_A(value){

targetBPM_A = value;

}



function setBPM_B(value){

targetBPM_B = value;

}





console.log(
"AI DJ ENGINE READY"
);
