// IMAN DJ BPM ANALYZER


async function analyzeBPM(audioFile, displayID){

let audioContext =
new AudioContext();


let arrayBuffer =
await audioFile.arrayBuffer();


let audioBuffer =
await audioContext.decodeAudioData(arrayBuffer);



let duration =
audioBuffer.duration;


let sampleRate =
audioBuffer.sampleRate;


let data =
audioBuffer.getChannelData(0);



let peaks = 0;



for(let i=1;i<data.length-1;i++){

if(
data[i] > 0.8 &&
data[i] > data[i-1] &&
data[i] > data[i+1]
){

peaks++;

}

}



let seconds =
duration;


let bpm =
Math.round(
(peaks / seconds) * 60
);



if(bpm < 60 || bpm > 200){

bpm = 128;

}



document.getElementById(displayID).innerHTML =
bpm;



return bpm;

}



console.log(
"BPM ANALYZER READY"
);
