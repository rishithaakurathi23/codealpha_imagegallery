let images = document.querySelectorAll(".gallery img");

let likedImages = new Set();

function updateImages() {
  images = document.querySelectorAll(".gallery img");
}

/* OPEN IMAGE */
function openImage(img) {
  updateImages();

  
  window.currentImg = img;

  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;

  updateLikeButton();

  document.body.style.overflow = "hidden";
}

/* CLOSE */
function closeImage() {
  document.getElementById("lightbox").style.display = "none";
  document.body.style.overflow = "auto";
}

/* NEXT IMAGE */
function nextImage() {
  updateImages();

  let index = Array.from(images).indexOf(window.currentImg);
  let nextIndex = (index + 1) % images.length;

  window.currentImg = images[nextIndex];
  document.getElementById("lightbox-img").src = window.currentImg.src;

  updateLikeButton();
}

/* PREV IMAGE */
function prevImage() {
  updateImages();

  let index = Array.from(images).indexOf(window.currentImg);
  let prevIndex = (index - 1 + images.length) % images.length;

  window.currentImg = images[prevIndex];
  document.getElementById("lightbox-img").src = window.currentImg.src;

  updateLikeButton();
}

/* LIKE TOGGLE */
function toggleLike() {
  if (likedImages.has(window.currentImg)) {
    likedImages.delete(window.currentImg);
  } else {
    likedImages.add(window.currentImg);
  }

  updateLikeButton();
}

/* UPDATE BUTTON */
function updateLikeButton() {
  let btn = document.getElementById("likeBtn");

  if (likedImages.has(window.currentImg)) {
    btn.innerHTML = "❤️ This image was Liked";
  } else {
    btn.innerHTML = "🤍 Like this image";
  }
}

/* FILTER */
function filterImages(category) {
  let allImgs = document.querySelectorAll(".gallery img");

  allImgs.forEach(img => {
    let imgCategory = img.getAttribute("data-category");

    img.style.display =
      category === "all" || imgCategory === category ? "block" : "none";
  });

  updateImages();
}

/* KEYBOARD */
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "Escape") closeImage();
});
