
var colours=["blue","green","red","yellow"];
var pattern=[];
var userPattern=[];
var lvl=0;

var started=false;

$(document).keypress(function() {
   if(!started){
       $("h1").text("Level " + lvl);
       started=true;
       gameSequence();  
   } 
});


$(".btn").click(function () {
   var color=$(this).attr("id");
   userPattern.push(color);
   playSound(color);
   addAnimation(color);
   console.log(pattern);
   console.log(userPattern);
   checkAnswer((pattern.length)-1);
});

function checkAnswer(currentLevel) {
    if  (pattern.length>userPattern.length) {
        if(userPattern[userPattern.length-1]===pattern[userPattern.length-1]){
            console.log("wait");
        }
        else{
            var audio=new Audio("sounds/wrong.mp3");
            audio.play();
            $("body").addClass("game-over");
            setTimeout(function() {
                $("body").removeClass("game-over");
             }, 200);
            $("h1").text("Game Over, Press Any Key To Restart");
            startOver();
        }
    }
    
    else if(pattern[currentLevel]===userPattern[currentLevel]){
        console.log("success");
        
    

    if (pattern.length == userPattern.length) {
        setTimeout(function() {
            gameSequence();
        }, 1000);
    }
}
    else{
        var audio=new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
         }, 200);
        $("h1").text("Game Over, Press Any Key To Restart");
        startOver();
    }
}

function gameSequence() {
    userPattern=[];
    lvl++;
    $("h1").text("Level "+lvl);
    var generatedNumber=Math.floor(Math.random()*4);
    var generatedColor=colours[generatedNumber];
    pattern.push(generatedColor);
    $("#"+generatedColor).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(generatedColor);
    
}

function playSound(color) {
    var audio=new Audio("sounds/"+color+".mp3");
    audio.play();
}


function addAnimation(key) {
    
    $("#"+key).addClass("pressed");
    setTimeout( function() {
        $("#"+key).removeClass("pressed");
    }, 100);
}
function startOver() {

    lvl = 0;
    pattern = [];
    started = false;
  }