const button = document.getElementById("myButton"); // Assuming your button has id "myButton"

hasmouseclicked = false;

button.addEventListener("click", function () {
  button.innerHTML = "Can't touch this!";
  hasmouseclicked = true;
});

// Audio element for sound effect
const audio1 = new Audio('audio/audio1-.mp3'); // Replace with your click sound path

audioplayed = 0;

button.addEventListener("mouseover", function () {
  if (hasmouseclicked) {

    audio1.play();
    button.style.position = "absolute";
    button.style.zIndex = 1;
    
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
  
    const randomX = Math.random() * (screenWidth - buttonWidth);
    const randomY = Math.random() * (screenHeight - buttonHeight);
  
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
    setTimeout(pauseAudio, 4000);
  }
});

function pauseAudio(){
  audio1-mp3.pause();
}







