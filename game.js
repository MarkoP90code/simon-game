
// var userClickedPattern = [];
// var gamePattern = [];
// var level = 0;

// var buttonColours = ["red", "blue" , "green", "yellow"];


// $(document).keydown(function(){
//     if (gamePattern.length === 0){
//     nextSequence();
//     }
// });

// function nextSequence(){
//     level++;
//     userClickedPattern = [];
    
//     var randomNumber = Math.floor(Math.random() * 4);       //Bira random broj
//     var randomChosenColour = buttonColours[randomNumber];   //Bira random boju iz buttonColours
//     gamePattern.push(randomChosenColour);                   //Ubacije random boju u game Pattern array

//     $("#" + randomChosenColour).fadeOut(100).fadeIn(100);   //Random izabrano dugme se ugaci i upali brzo    

//     playSound(randomChosenColour);

//     $("#level-title").text("level " + level);
    
// };


// function checkAnswer(currentLevel){
//     if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
//         if(userClickedPattern.length === gamePattern.length) {  
//             setTimeout(function() { nextSequence(); }, 1000);
//             };
        
//     } else {
//         playSound("wrong"); //Ide pod navodnike posto nije var
//         $("body").addClass("game-over");
//         setTimeout(function() {
//             $("body").removeClass("game-over");
//         }, 200);
//         $("#level-title").text("Game Over, Press Any Key to Restart");
//         startOver();
//     }
// }


// $(".btn").click(function(){
//     var userChosenColour = $(this).attr("id");              //Moglo je i samo this.id i radilo bi. Ali vec this.class ne radi. Za to bi moralo this.className ili this.classList 
//     userClickedPattern.push(userChosenColour);
   
//     playSound(userChosenColour);

//     animatePress(userChosenColour);

//     checkAnswer(userClickedPattern.length - 1);
// });




// function playSound(name){
//     var audio = new Audio("sounds/" + name + ".mp3"); //Svakoj random izabranoj boji smo dodelili zvuk
//     audio.play();
// }

// function animatePress(currentColour) {
//     $("." + currentColour).addClass("pressed");
//     setTimeout(function() {
//         $(".btn").removeClass("pressed");
//     }, 100);
// };

// function startOver(){
//     gamePattern = [];
//     level = 0;
// }




//____________________________________________________________________

//VERZIJA ZA PARCEL


import * as sounds from 'url:./sounds/*.mp3';

var userClickedPattern = [];
var gamePattern = [];
var level = 0;

var buttonColours = ["red", "blue" , "green", "yellow"];


$(document).keydown(function(){
    if (gamePattern.length === 0){
    nextSequence();
    }
});

function nextSequence(){
    level++;
    userClickedPattern = [];
    
    var randomNumber = Math.floor(Math.random() * 4);       //Bira random broj
    var randomChosenColour = buttonColours[randomNumber];   //Bira random boju iz buttonColours
    gamePattern.push(randomChosenColour);                   //Ubacije random boju u game Pattern array

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);   //Random izabrano dugme se ugaci i upali brzo    

    playSound(randomChosenColour);

    $("#level-title").text("level " + level);
    
};


function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length) {  
            setTimeout(function() { nextSequence(); }, 1000);
            };
        
    } else {
        playSound("wrong"); //Ide pod navodnike posto nije var
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}


$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");              //Moglo je i samo this.id i radilo bi. Ali vec this.class ne radi. Za to bi moralo this.className ili this.classList 
    userClickedPattern.push(userChosenColour);
   
    playSound(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});




function playSound(name){
    var audio = new Audio(sounds[name]); //Svakoj random izabranoj boji smo dodelili zvuk
    audio.play();
}

function animatePress(currentColour) {
    $("." + currentColour).addClass("pressed");
    setTimeout(function() {
        $(".btn").removeClass("pressed");
    }, 100);
};

function startOver(){
    gamePattern = [];
    level = 0;
}
