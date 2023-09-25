// fetch all the button through id selector
let startBtn= document.querySelector('#start'); 
let pauseBtn =document.querySelector('#pause');
let  resetBtn= document.querySelector('#reset')

//  console.log(resetBtn)

 let hour=0;
 let min=0;
 let second=0;
 let count=0;
 let startBtnClikedCount =0;

//Add event Listener
 startBtn.addEventListener('click', function(){
   
    startBtnClikedCount++;
    if(startBtnClikedCount == 1){
    console.log('Start button is clicked');
    
    timer =true;
    startStopwatch();
}
 });

   pauseBtn.addEventListener('click',function(){
           
            console.log('Pause button is clicked');
            timer = false;
            startBtnClikedCount =0;

   });

   resetBtn.addEventListener('click',function(){
  
       console.log('Reset button is clicked');
    timer=false;
    hour=0;
    min=0;
    second=0;
    count=0;
    startBtnClikedCount =0
    document.querySelector('#hr').innerHTML = '00'
    document.querySelector('#min').innerHTML = '00'
    document.querySelector('#sec').innerHTML = '00'
   
    // reset  hour min, second color to black
        document.getElementById("sec").style.color = "black";
        document.getElementById("sec").style.color = "black";
        document.getElementById("sec").style.color = "black";
    

   });

//Define stop watch function
function startStopwatch(){
   
    
    if(timer){
        count++;
        if(count == 100){
            second++;
            count=0;
        }

      if(second == 60){
        min++;
        second=0;
      }

      if(min == 60){
        hour++;
        min=0;
      }
      
      let hourText=hour;
      let minText=min;
      let secText=second;
      if(hour < 10){
        hourText = "0" + hourText;
      }
      if(min < 10){
        minText = "0" + minText;
      }
      if(second < 10){
        secText = "0" + secText;
      }

      // set color for non zero value of hour, min & second

      if(second>0){
        document.getElementById("sec").style.color = "blue";
      }
      if(min>0){
        document.getElementById("sec").style.color = "blue";
      }
      if(second>0){
        document.getElementById("sec").style.color = "blue";
      }
    

//    console.log( document.querySelector('#sec.innerHTML'))
      document.querySelector('#hr').innerHTML = hourText;
      document.querySelector('#min').innerHTML = minText;
      document.querySelector('#sec').innerHTML = secText;
      
    //  console.log( document.querySelector('#sec.innerHTML'))
      setTimeout(startStopwatch,10);

    }

}