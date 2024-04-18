let slideIndex = 0;

function moveSlider(n) {
  showSlides((slideIndex += n));
  console.log(slideIndex);
}

function showSlides(n) {
  const slides = document.querySelectorAll(".items");

  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[slideIndex].classList.add("active");
}
showSlides(slideIndex);

// dropdown

function toggleDropdown() {
  let dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("show");
}
