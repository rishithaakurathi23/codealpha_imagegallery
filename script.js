let images = document.querySelectorAll(".gallery img");
let currentIndex = 0;

// 👉 store by image src (BEST FIX)
let likedImages = {};

function updateImages() {
  images = document.querySelectorAll(".gallery img");
}

/* OPEN IMAGE */
function openImage(img) {
  updateImages();

  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;

  currentIndex = Array.from(images).indexOf(img);

  updateLikeButton();
  document.body.style.overflow = "hidden";
}

/* CLOSE */
function closeImage() {
  document.getElementById("lightbox").style.display = "none";
  document.body.style.overflow = "auto";
}

/* NEXT */
function nextImage() {
  if (images.length === 0) return;

  currentIndex = (currentIndex + 1) % images.length;

  document.getElementById("lightbox-img").src = images[currentIndex].src;

  updateLikeButton();
}

/* PREV */
function prevImage() {
  if (images.length === 0) return;

  currentIndex = (currentIndex - 1 + images.length) % images.length;

  document.getElementById("lightbox-img").src = images[currentIndex].src;

  updateLikeButton();
}

/* LIKE TOGGLE */
function toggleLike() {
  let src = images[currentIndex].src;

  likedImages[src] = !likedImages[src];

  updateLikeButton();
}

/* UPDATE BUTTON */
function updateLikeButton() {
  let btn = document.getElementById("likeBtn");
  let src = images[currentIndex].src;

  if (likedImages[src]) {
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

    if (category === "all" || imgCategory === category) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });

  updateImages();
}

/* KEYBOARD */
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "Escape") closeImage();
});
