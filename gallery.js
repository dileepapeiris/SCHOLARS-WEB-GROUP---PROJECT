let currentIndex = 0;
let thumbnails = document.querySelectorAll(".thumbnail");

function openExtendedView(index) {
  const thumbnail = thumbnails[index];
  const img = thumbnail.querySelector("img");
  const imgSrc = img.src;
  const imgTitle = thumbnail.querySelector(".title").textContent;
  const imgDescription =
    thumbnail.querySelector(".image-description").textContent;

  document.getElementById("extendedImage").src = imgSrc;
  document.getElementById("extendedDescription").textContent = imgDescription;
  document.getElementById("extendedTitle").textContent = imgTitle;
  document.getElementById("extendedView").style.display = "flex";

  currentIndex = index;
}

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    openExtendedView(index);
  });
});

function closeExtendedView() {
  document.getElementById("extendedView").style.display = "none";
}

function customizeColor() {
  const color = document.getElementById("colorPicker").value;
  document.getElementById("extendedView").style.backgroundColor = color;
}

function customizeFont() {
  const font = document.getElementById("fontPicker").value;
  document.getElementById("extendedTitle").style.fontFamily = font;
  document.getElementById("extendedDescription").style.fontFamily = font;
}

function previousImage() {
  let newIndex = currentIndex - 1;
  if (newIndex < 0) {
    newIndex = thumbnails.length - 1;
  }
  openExtendedView(newIndex);
}

function nextImage() {
  let newIndex = currentIndex + 1;
  if (newIndex >= thumbnails.length) {
    newIndex = 0;
  }
  openExtendedView(newIndex);
}
