var Clock = function(Hour, Minute, Second){
    this.Hour = Hour;
    this.Minute = Minute;
    this.Second = Second;
    this.alarm = "";
  
    this.time = function(){
    var newHour = this.Hour;
    var newMinute = this.Minute;
    var newSecond = this.Second;
    
    if (this.Hour < 10){
    newHour = "0" + this.Hour
    }
    if (this.Minute < 10){
    newMinute = "0" + this.Minute
    }
    if (this.Second < 10){
    newSecond = "0" + this.Second
    }
    return (newHour + ":" + newMinute + ":" + newSecond)  
        } 
              
           
    this.tick = function(){
    
        this.Second = this.Second + 1;
        
   
    
    if (this.Second >= 60){
    this.Second = 0 ;
    this.Minute ++    ;      
    }
    if (this.Minute >= 60){
    this.Minute = 0;
        this.Hour ++;
    }
    if (this.Hour >= 24){
    this.Hour = 0   ;
    }
    if (this.alarm == this.time()) {
    console.log(this.time() + " !!Alarma¡¡" + " DESPIERTA!" + " Perezoso!");
    }            
    
    
}        

        
this.addAlarm = function(alarm) {
this.alarm = alarm;
}            
   
};
clock = new Clock(22, 35, 59)
        clock.addAlarm("22:36:04");
       
  var correr=0; 
    while(correr<10){ 
        clock.tick(); console.log(clock.time());
            
        correr ++;
    }
        

        