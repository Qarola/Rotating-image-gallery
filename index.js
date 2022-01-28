const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;
let timer;
prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer); //resetea el timeOut para que permita hacer uso de los botones cuando esté girando...
  updateGallery();
});

nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
});

const updateGallery = () => {
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
   timer = setTimeout(() => { //quedaría girando constantemente cada 3s...
       x = x - 45;
       updateGallery();
   }, 3000)
};

updateGallery();


