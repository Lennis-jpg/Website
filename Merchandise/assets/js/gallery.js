 // Wait for DOM to load
 document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery-img");
    const mainImage = document.getElementById("main-product-image");

    galleryImages.forEach(img => {
      img.addEventListener("click", function () {
        const newSrc = this.getAttribute("src");
        mainImage.setAttribute("src", newSrc);
        mainImage.setAttribute("alt", this.getAttribute("alt"));
      });
    });
  });