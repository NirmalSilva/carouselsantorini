let images = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg",
  "images/pic5.jpg",
  "images/pic6.jpg",
  "images/pic7.jpg",
];
let img = document.querySelector("img");
let currentIndex = 0;
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");

// when you click on next button , increment index by one. check if its the end of the array. if its the end of the array ..set the index to zero to start over. if not change the src value of image to the current index image

let incrementIndex = function () {
  currentIndex = currentIndex + 1;
  if (currentIndex > images.length - 1) {
    currentIndex = 0;
  }
  return currentIndex;
};

nextButton.onclick = function () {
  img.setAttribute("src", images[incrementIndex(currentIndex)]);
};

let decrementIndex = function () {
  if (currentIndex == 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex = currentIndex - 1;
  }
  return currentIndex;
};

prevButton.onclick = function () {
  img.setAttribute("src", images[decrementIndex(currentIndex)]);
};
