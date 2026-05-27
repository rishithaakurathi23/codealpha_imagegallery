let images = document.querySelectorAll(".gallery img");
let currentIndex = 0;
let isLiked = false;

function updateImages() {
  images = document.querySelectorAll(".gallery img");
}

/* OPEN IMAGE */
function openImage(img) {
  updateImages();

  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;

  currentIndex = Array.from(images).indexOf(img);

  isLiked = false;
  document.getElementById("likeBtn").innerHTML = "🤍 Like this image";

  document.body.style.overflow = "hidden";
}

/* CLOSE IMAGE */
function closeImage() {
  document.getElementById("lightbox").style.display = "none";
  document.body.style.overflow = "auto";
}

/* NEXT IMAGE */
function nextImage() {
  if (images.length === 0) return;

  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

/* PREV IMAGE */
function prevImage() {
  if (images.length === 0) return;

  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

/* LIKE BUTTON */
function toggleLike() {
  let btn = document.getElementById("likeBtn");
  isLiked = !isLiked;

  if (isLiked) {
    btn.innerHTML = "❤️ This image was Liked";
  } else {
    btn.innerHTML = "🤍 Like this image";
  }
}


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

  updateImages(); // refresh after filtering
}

/* KEYBOARD SUPPORT */
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "Escape") closeImage();
});    
