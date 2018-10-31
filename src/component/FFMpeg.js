'use strict';
const { execSync } = require('child_process');

class FFMpeg{
    
    constructor(inputPath, outputPath, startTime, endTime, audio=true, video=false ){
        this.inputPath = inputPath;
        this.outputPath = outputPath;
        this.startTime = startTime;
        this.endTime = endTime;
             
        /* options for audio andvideo */
        this.audio = audio==true?'':'-an';
        this.video = video==true?'':'-vn';
    }

    executeTrim(){
        let com = `ffmpeg -i ${this.inputPath} -ss ${this.startTime} -to ${this.endTime} -c copy ${this.audio} ${this.video} ${this.outputPath}`;
        let stdout = execSync(com);
        console.log(com);
        return stdout;
    }

}

module.exports = FFMpeg;