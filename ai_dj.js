// AI DJ BEAT SYNC

let bpmA = 128;
let bpmB = 128;


function autoBeatMatch(){

    if(!audioA || !audioB){
        return;
    }

    let ratio = bpmA / bpmB;

    audioB.playbackRate = ratio;

    console.log("AI SYNC ACTIVE");

}



function AI_MIX(){

    autoBeatMatch();

    audioB.play();

}
