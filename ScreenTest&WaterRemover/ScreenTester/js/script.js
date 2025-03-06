function changeBackground() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

// using inline variable
      document.body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
  
    // using local variable
// uncomment to see how it works

      // let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    //   document.body.style.background = bgColor;

  }

  //function countclick() {
  //  let count = 0;
  //      let btn = document.getElementById("btn");
  //      let disp = document.getElementById("display");
         
  //      btn.onclick = function () {
  //                  count++;
  //      disp.innerHTML = count;
  //      }
  //}

    //5 Minutes
    var x = document.getElementById("5MinuteWaterRemoval"); 

    function play5minutes() { 
      x.play(); 
    } 

      //10 Minutes
    var x = document.getElementById("10MinuteWaterRemoval"); 

    function play10minutes(){ 
      x.play(); 
    }  

    //15 Minutes
    var x = document.getElementById("15MinuteWaterRemoval"); 

    function play15minutes(){ 
      x.play(); 
    } 

    //20 Minutes
    var x = document.getElementById("20MinuteWaterRemoval"); 

    function play20minutes(){ 
      x.play(); 
    } 
  
    //25 Minutes
    var x = document.getElementById("25MinuteWaterRemoval"); 

    function play25minutes(){ 
      x.play(); 
    } 

    //30 Minutes
    var x = document.getElementById("30MinuteWaterRemoval"); 

    function play30minutes(){ 
      x.play(); 
    } 