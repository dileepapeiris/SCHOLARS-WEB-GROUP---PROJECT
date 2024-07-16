const images = [
  {
    src: "Images/Student4/GalleryPage/image4.jpg",
    title: "Title 1",
    description: "Description of image 1",
  },
  {
    src: "Images/Student4/GalleryPage/image3.jpeg",
    title: "Title 2",
    description: "Description of image 2",
  },
  {
    src: "Images/Student4/GalleryPage/image2.jpg",
    title: "Title 3",
    description: "Description of image 3",
  },
  {
    src: "Images/Student4/GalleryPage/image1.jpg",
    title: "Title 4",
    description: "Description of image 4",
  },
  {
    src: "Images/Student4/GalleryPage/image5.jpg",
    title: "Title 5",
    description: "Description of image 5",
  },
];

let currentIndex = 0;

function openExtendedView(imageSrc, title, description) {
  document.getElementById("extendedImage").src = imageSrc;
  document.getElementById("extendedTitle").textContent = title;
  document.getElementById("extendedDescription").textContent = description;
  document.getElementById("extendedView").style.display = "block";
  currentIndex = images.findIndex((image) => image.src === imageSrc);
}

function closeExtendedView() {
  document.getElementById("extendedView").style.display = "none";
}

function customizeColor() {
  const color = document.getElementById("colorPicker").value;
  document.getElementById("extendedView").style.backgroundColor = color;
}

function customizeFont() {
  const font = document.getElementById("fontPicker").value;
  document.getElementById("extendedView").style.fontFamily = font;
}

function previousImage() {
  currentIndex =
    currentIndex - 1 + images.length < 0
      ? images.length - 1
      : (currentIndex - 1 + images.length) % images.length;
  const { src, title, description } = images[currentIndex];
  openExtendedView(src, title, description);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  const { src, title, description } = images[currentIndex];
  openExtendedView(src, title, description);
}

document.querySelectorAll(".thumbnail img").forEach((img) => {
  img.addEventListener("click", function () {
    const title = this.nextElementSibling.textContent;
    const description = this.alt;
    openExtendedView(this.src, title, description);
  });
});
