'use strict';

var os = require("os");


class RenderObject{

    constructor(){
        let videoPath = document.getElementsByClassName('real_video')[0].src;
        let platform = os.platform();
        if(platform == 'linux')
            this.inputPath = videoPath.replace('file://','');
        else
            this.inputPath = videoPath.replace('file:///','');

        //format output fileName
        let formatOutput = this.inputPath.split('/');
        let file_output = new Date().getTime() + "_" + formatOutput.pop();
        formatOutput = formatOutput.join('/') + "/" + file_output;
        this.outputPath = formatOutput;

        //start and end time
        this.startTime = document.getElementById("start-time").value;
        this.endTime = document.getElementById("end-time").value;


        this.video = document.getElementsByClassName('checkbox')[0].checked == true?true:false;
        this.audio = document.getElementsByClassName('checkbox')[1].checked == true?true:false;
        
    }

}

module.exports = RenderObject;