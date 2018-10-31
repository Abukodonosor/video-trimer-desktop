// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { execSync } = require('child_process');

/* Models */
var Ffmpeg = require('../component/FFMpeg');
var RenderObject  = require('../component/renderObject'); 

/* Event tags */

//video change EVENT
document.getElementsByClassName('new_file')[0].addEventListener('change', changeInputFile);
//start triming file
document.getElementById("akcione").addEventListener('click', startTrimingProces)

/* Event functionality */

//changeing src of video tag
function changeInputFile(){
    let videoElem = document.getElementsByClassName("real_video")[0];
    let inputFile = document.getElementsByClassName("new_file")[0].files;

    videoElem.src= inputFile[0].path;
}

// triming proces 
function startTrimingProces(){
    document.getElementById("message").innerHTML = "Proccesing!";

    setTimeout(()=>{    
        var objectFromGui = new RenderObject();
        var ffmpegMagic = new Ffmpeg(objectFromGui.inputPath, objectFromGui.outputPath, objectFromGui.startTime, objectFromGui.endTime, objectFromGui.audio, objectFromGui.video);
        var message = ffmpegMagic.executeTrim();
        document.getElementById("message").innerHTML = "The video timing is finished! Result can be found on laction where is placed input file!";
    },1000)

}
