var second = 00; 
var minuet = 00; 
var appendTens = document.getElementById("minuet");
var appendSeconds = document.getElementById("second");
var Interval;
function startmyTimer(){
    clearInterval(Interval);
    Interval = setInterval(startTimer, 1000);
    return 0;
}
function stopmyTimer(){
    clearInterval(Interval);
}
function resetmyTimer(){
    clearInterval(Interval);
    minuet = "00";
      second = "00";
    appendTens.innerHTML = minuet;
      appendSeconds.innerHTML = second;
}
function startTimer () {
    minuet++; 
    
    if(minuet <= 9){
      appendTens.innerHTML = "0" + minuet;
    }
    
    if (minuet > 9){
      appendTens.innerHTML = minuet;
      
    } 
    
    if (minuet > 59) {
      console.log("second");
      second++;
      appendSeconds.innerHTML = "0" + second;
      minuet = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (second > 9){
      appendSeconds.innerHTML = second;
    }
  
  }
  

