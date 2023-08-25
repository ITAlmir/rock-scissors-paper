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

const thumbnails = document.querySelectorAll(".thumbnail");
const largeImage = document.querySelector(".large-image");
const largeCpuImage = document.getElementById("comp-lage-img");
let slideShow = document.getElementById("slideshow-container");
let compContainer = document.getElementById("comp-container");
let isClickable = true;
let myScore = 0;
let compScore = 0;

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", () => {
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
}, 3000);
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
             myScore = myScore;
             compScore = compScore;
          }if (num2 == 1) {
            compScore++; 
          } else {
            myScore++;
          }
          break;
        case "1":
            if(num2 == 0){
                myScore++;
             }if (num2 == 1) {
                myScore = myScore;
                compScore = compScore;
             } else {
                compScore++; 
             }
          break;
        case "2":
            if(num2 == 0){
                compScore++; 
             }if (num2 == 1) {
                myScore++;
             } else {
                myScore = myScore;
                compScore = compScore;
             }
          break;
        default:
          // Default case if id doesn't match any of the above
          break;
      }
      console.log(myScore);
      console.log(compScore);
}