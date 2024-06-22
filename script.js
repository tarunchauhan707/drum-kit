var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("audio/h-tom.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("audio/mid-tom.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('audio/high-tom.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('audio/floor-tom.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('audio/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('audio/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('audio/kick.mp3');
      kick.play();
      break; 

    case "o":
        var hihat2 = new Audio('audio/close-hi-hat.mp3');
        hihat2.play();
        break;  

    case "m":
      var hihat1 = new Audio('audio/open-hi-hat.mp3');
      hihat1.play();
      break;

    case "r":
      var ride = new Audio('audio/ride.mp3');
      ride.play();
      break;

   


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}