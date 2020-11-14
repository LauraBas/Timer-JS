window.onload = function() {

    document.getElementById('plus').addEventListener('click',sum);
    document.getElementById('substract').addEventListener('click', substract);
   

     let counter = 0;    

    function sum(){
        counter++;
        console.log(counter);
        document.getElementById('counter').innerHTML = counter;
    }


    function substract(){
        if (counter > 0){
            counter--;
        }
        document.getElementById('counter').innerHTML = counter;
    }

    document.getElementById('play').addEventListener('click',play);
    document.getElementById('pause').addEventListener('click', pause);
    document.getElementById('reset').addEventListener('click',reset);
    
    let timer = 0;
    let timeOn;

    function play (){
        timeOn = setInterval(increment, 1000)
    }

    function increment(){
        timer++;
        document.getElementById('timer').innerHTML = timer;
        
    }

    function pause(){
        clearInterval(timeOn)
        document.getElementById('timer').innerHTML = timer;
    }

    function reset(){
        clearInterval(timeOn)
        timer = 0;
        document.getElementById('timer').innerHTML = timer;
    }
    document.getElementById('actualTime').addEventListener('click',startClock);

    function startClock() {
        let today = new Date();
        let hour = today.getHours();
        let min = today.getMinutes();
        let sec = today.getSeconds();
        
        min = checkFormat(min);
        sec = checkFormat(sec);
        document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
        setTimeout(function(){startClock()}, 1000);
      }
      
      function checkFormat(n) {
        if (n < 10) {
          n = "0" + n;
        }
        return n;
      }
}