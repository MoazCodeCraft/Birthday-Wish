// Create an audio object outside the event listener
var audio = new Audio("birthday.mp3");
var img = document.querySelector(".cake_img");
var toggle = true;

const balloonContainer = document.getElementById("balloon-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
    background-color: rgba(${r},${g},${b},0.9); /* Increase opacity for better visibility */
    color: rgba(${r},${g},${b},0.9); 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Dark shadow for better contrast */
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in-out infinite;
  `;
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

function removeBalloons() {
  balloonContainer.style.opacity = 0;
  
  setTimeout(() => {
    balloonContainer.innerHTML = ""; // Clear all balloons inside the container
    balloonContainer.style.opacity = 1;
  }, 500);
}

img.addEventListener("click", function() {
  if (toggle) {
    toggle = !toggle;
    img.setAttribute("src", "cake1-removebg-preview.png");
  } else {
    img.setAttribute("src", "cake2-removebg-preview.png");
  }
});

document.querySelector(".glow-on-hover").addEventListener("click", function() {
  img.setAttribute("src","cake2-removebg-preview.png")
  this.innerHTML = "Happy Birthday";
  document.querySelector(".p2").innerHTML = "Created By Moaz Bin Zafar";
  buttonAnimation()
  if (audio.paused) {
    audio.play();
    createBalloons(30); // Start creating balloons when audio plays
    document.querySelector(".p1").innerHTML="Wishing you a day filled with joy, laughter, and all your favorite things. May this year bring you closer to your dreams and be filled with countless blessings. Enjoy every moment and make beautiful memories! Cheers to another amazing year of life! 🥳🎂🎈"
  } else {
    audio.pause();
    this.innerHTML = "Click me for wishes";
    document.querySelector(".p1").innerHTML = "Click again to show wishes";
    document.querySelector(".p2").innerHTML = "Best Of Luck for your Future";
    audio.currentTime = 0;
    
  }
});

function buttonAnimation(){
  var activebutton=document.querySelector(".glow-on-hover");
  activebutton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
