var wins = 0;
    var losses = 0;
    var counter = 0;
    var reset = 0;
    var clicks = 0;
    var score = [];
;
    
    
    
     $(document).ready(function() {

  
   

  var targetnumber = Math.floor(Math.random() * 120) + 19; //math.random to create a random number between 19-120

 function getRndInteger() {
    var targetnumber = Math.floor(Math.random() * 120) + 19;
    }
    getRndInteger();

    var numberOptions = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1),
    Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)];

    
    $("#number-to-guess").text(targetnumber); //displays target number in div 


    

    for(var i = 0; i < numberOptions.length; i++) {

      var imageCrystal = $("<img>")
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg")
        imageCrystal.attr("data-crystalValue", numberOptions[i]);
        $("#crystals").append(imageCrystal);
      
    }
var reset = 0;
  $("#number-of-clicks").text("Number of clicks: " + clicks);
    

    $(".crystal-image").on('click', function() {

      var crystalValue = $(this).attr("data-crystalValue");
      crystalValue = parseInt(crystalValue);
      counter = counter + crystalValue;
      $("#total-score").text(counter);
      clicks++;
      
      if(counter === targetnumber) {
        wins++;
        
        alert("You Win!");  
        debugger;
        score.push(clicks);   
        debugger;
        reset++;

        
      }
        else if (counter > targetnumber) {
            function loser() {
        losses++;
        alert("You Lose!");        
        }
        loser();
        reset++;
          
      }

function resetGame() {

        targetnumber = Math.floor(Math.random() * 120) + 19;
             $("#number-to-guess").text(targetnumber);
        numberOptions = [Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1),
             Math.floor((Math.random() * 12) + 1), Math.floor((Math.random() * 12) + 1)];

        counter = 0;
        reset = 0;
        clicks = 0;
    }

      if(reset > 0) {
        
        resetGame();
        
        getRndInteger();
        console.log(numberOptions);
      }


      $("#wins").text("Wins: " + wins);
      $("#losses").text("Losses: " + losses);
      $("#high-score").text("High Score: " + Math.min(...score));
      console.log(score);

    })

     });