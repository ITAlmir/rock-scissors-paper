// script.js
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 200);
}

let thumbnails = document.querySelectorAll(".thumbnail");
let largeImage = document.querySelector(".large-image");
let largeCpuImage = document.getElementById("comp-lage-img");
let slideShow = document.getElementById("slideshow-container");
let compContainer = document.getElementById("comp-container");
let roundsForm = document.getElementById("round-count");
let input = document.getElementById('rounds');
let submitButton = document.getElementById('submit-btn');
let imgElement = document.getElementById('transition-img');
let gameSection = document.getElementById('game-section');
let compScoreParagraph = document.getElementsByClassName("cpu-score");
let myScoreParagraph = document.getElementById("my-score");
let roundsLeftParagraph = document.getElementById("rounds-left");
let gameTipsParagraph = document.getElementById("game-tips");
let upperGameTipsParagraph = document.getElementById("game-tips-upper");
let divElement = document.getElementById('game-icons');

let isClickable = true;
let myScore = 0;
let compScore = 0;
let roundCounter = 0;

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
    if(roundCounter > 0){
      upperGameTipsParagraph.classList.add("hidden");
      slideShow.classList.remove("hidden");
    compContainer.classList.add("hidden");
    if (isClickable) {
        isClickable = false; 
    largeImage.src = thumbnail.src;


    setTimeout(() => {
    var randomIndex = getRandomIndex(thumbnails.length);
    largeCpuImage.src = thumbnails[randomIndex].src;
    slideShow.classList.add("hidden");
    compContainer.classList.remove("hidden");
    isClickable = true;
    showScores(thumbnail.id,randomIndex);
    upperGameTipsParagraph.classList.remove("hidden");
}, 3000);
    }
    }else{
      hihglightText = "Game Over !";
            noProgress(hihglightText);
    }
    
  });
});

function startNewGame(){
  roundsForm.classList.remove("hidden");
}

document.addEventListener('DOMContentLoaded', function() {  

  myScore = 0;
  compScore = 0;
  
  let submitButton = document.getElementById('submit-btn');
  submitButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    let userInputValue = input.value;
    if(userInputValue ===""){
      hihglightText = "Please enter number of round !";
            noProgress(hihglightText);
    }else if(isNaN(userInputValue)){
      hihglightText = "Please use numbers !";
            noProgress(hihglightText);
    } else{
    setInterval(changeBackgroundColor, 50);
    upperGameTipsParagraph.classList.remove("hidden");
    roundCounter = userInputValue;
    roundsLeftParagraph.innerHTML="Rounds Left:"+roundCounter;
    roundsForm.classList.add("hidden");
    imgElement.style.width = '10%';
    gameSection.classList.remove('hidden');
    gameTipsParagraph.classList.add("hidden");

  }
  });
});

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }

function showScores(num1,num2){

    switch (num1) {
        case "0":
          // Handle case for image 1
          if(num2 == 0){
            hihglightText = "It's a tie";
             myScore = myScore;
             compScore = compScore;
          }else if(num2 == 1) {
            hihglightText = "The CPU scored";
            compScore++; 
          } else {
            hihglightText = "You scored";
            myScore++;
          }
          break;
        case "1":
            if(num2 == 0){
              hihglightText = "You scored";
                myScore++;
             }else if (num2 == 1) {
              hihglightText = "It's a tie";
                myScore = myScore;
                compScore = compScore;
             } else {
                hihglightText = "The CPU scored";
                compScore++; 
             }
          break;
        case "2":
            if(num2 == 0){
              hihglightText = "The CPU scored";
                compScore++;
             }else if (num2 == 1) {
              hihglightText = "You scored";
              myScore++;
             } else {
              hihglightText = "It's a tie";
              myScore = myScore;
                compScore = compScore;
             }
          break;
        default:
          console.log("No match");
          break;
      }
      myScoreParagraph.innerHTML=myScore;
      compScoreParagraph[0].innerHTML=compScore;
      compScoreParagraph[1].innerHTML=compScore;
      noProgress(hihglightText);
      roundCounter--;
      roundsLeftParagraph.innerHTML="Rounds Left:"+roundCounter;
      let won = "";
      if(roundCounter == 0){
        if(compScore > myScore){
           won = "CPU Won! ";
        }else if(myScore >compScore){
          won = "You won !"
        }else{
          won = "It's a tie !";
        }
        gameTipsText = "Game Over! <br>"+ won +"<br> Please start new game!";
        gameTipsParagraph.classList.remove("hidden");
        gameTips(gameTipsText);
      }

}
function noProgress(hihglightText){
  let highlightedElements = document.getElementById("highlight");
      highlightedElements.innerHTML = hihglightText;
      highlightedElements.classList.remove("hidden");
      setTimeout(() => {
          highlightedElements.classList.add("hidden");
      }, 3000);
}
function gameTips(gameTipsText){
    gameTipsParagraph.innerHTML = gameTipsText;
}
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function changeBackgroundColor() {
  divElement.style.backgroundColor = getRandomColor();
}
