// Constructor
 function Chronometer() {
     this.currentTime = 0;
     this.intervalId = 0;

}

Chronometer.prototype.startClick = function () {
    that = this;
    this.intervalId = setInterval(function () {
        that.currentTime += 1;
        that.setTime();
      }, 1000);

      this.millisecondsIntervalId = setInterval(function () {
        if (that.currentMilliseconds === 99) {
          that.currentMilliseconds = 0;
        }
        that.setMilliseconds();
        that.currentMilliseconds += 1;
      }, 10);
    
};



Chronometer.prototype.setMinutes = function () {

    let min = 0;
    if(this.currentTime === 0){
        return 0;
    }else{
        //  min= (this.currentTime.getHours() * 60) + ":" + this.currentTime.getMinutes() + ":" + (this.currentTime.getSeconds()/60);    
        min = this.currentTime / 60;
         return parseInt(min);
         
    }

};

Chronometer.prototype.setSeconds = function () {
    // let min = 0;
    // if(this.currentTime === 0){
    //     return 0;
    // }else{
    //     //  min= (this.currentTime.getHours() * 60) + ":" + this.currentTime.getMinutes() + ":" + (this.currentTime.getSeconds()/60);    
    //     min = this.currentTime;
    //      return parseInt(min);
         
    // }
    return Math.floor(this.currentTime - (minutes * 60));


};

Chronometer.prototype.twoDigitsNumber = function (num) {
    
    if(num === 0){
        return "00";
    }else if(num === 15){
        return "15";
    }else if(num = 3){
        return "03";
    }
    // return ('0' + value).slice(-2);
};

Chronometer.prototype.setTime = function () {
    var minutes = this.twoDigitsNumber(this.setMinutes());
    var seconds = this.twoDigitsNumber(this.setSeconds(minutes));
};

Chronometer.prototype.setMilliseconds = function () {
    var miliseconds = this.twoDigitsNumber(this.currentMilliseconds);
    printMilliseconds(miliseconds);
};

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
    clearInterval(this.millisecondsIntervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime;
};

Chronometer.prototype.splitClick = function () {
  var minutes = this.twoDigitsNumber(this.setMinutes());
  var seconds = this.twoDigitsNumber(this.setSeconds(minutes));
  var miliseconds = this.twoDigitsNumber(this.currentMilliseconds);
  printSplit(minutes, seconds, miliseconds);
};
