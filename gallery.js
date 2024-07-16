document.querySelectorAll(".thumbnail").forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const imgSrc = thumbnail.querySelector("img").src;
    const imgAlt = thumbnail.querySelector("Description").p;
    document.getElementById("extendedImage").src = imgSrc;
    document.getElementById("extendedDescription").textContent = imgAlt;
    document.getElementById("extendedView").style.display = "flex";
  });

  thumbnail.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      thumbnail.click();
    }
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
  document.getElementById("extendedView").style.fontFamily = font;
}
