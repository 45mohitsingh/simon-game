var buttonColor=["red","blue","green","yellow"];
var gamePattern=[];
var  userClickedPattern=[];
var level=1;
var started=false;
$(".btn").click(function(){
    var userChosenColor=$(this).attr("id");
   userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer();
  

});
function nextSequence(){
    $("h1").text("Level"+" "+level);
    level++;
    var randomNumber= Math.floor(Math.random()*3)+1;
    var randomChosenColor=buttonColor[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+ randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    // playSound(randomChosenColor);
    
}
  function playSound(name) {
    var audio = new Audio("sounds/" + name +".mp3");
    audio.play();
}
function animatePress( currentColor ) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
  
}
$(document).keypress(function(){
    if(!started){
    nextSequence();
    }
    started=true;
});
function checkAnswer(){
  if(gamePattern.length>=userClickedPattern.length){
           for( let i=0;i<userClickedPattern.length;i++){
                 if(gamePattern[i]!=userClickedPattern[i]){
                    $("body").addClass("game-over");
                   
                    setTimeout(function() {
                       
                       
                        $("body").removeClass("game-over");
                        startOver() ;
                    }, 200);
                 
                    
                    
                  
                 }
                 else if(i==(gamePattern.length-1)){

                    userClickedPattern=[];
                    setTimeout(function() {
                        nextSequence();
                    }, 500);
                   
                 }
           } 
  }
  
}
function startOver(){
                     userClickedPattern=[];
                    gamePattern=[];
                    level=1;
                    $("h1").text("Game over, Press any key to restart");
                   started=false;

}