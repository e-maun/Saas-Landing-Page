const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // 50px down
    navbar.classList.add('bg-white', 'shadow');
    navbar.classList.remove('navbar-dark'); 
    
  } else {
    navbar.classList.remove('bg-white', 'shadow');
   
  }
});

//section 2: Accordion Image Change
const Second_image = document.getElementById("Second_Image1");
const Second_accordionItems = document.querySelectorAll(".accordion-collapse");

Second_accordionItems.forEach(item => {
  item.addEventListener("shown.bs.collapse", function () {
    const newImage = this.dataset.image;
    Second_image.src = newImage;
  });
});

// SECTION 3: Accordion Image / Carousel Switch

const sec3Image = document.getElementById("sec3_rightImage");
const sec3Carousel = document.getElementById("sec3_carousel");

const sec3Items = document.querySelectorAll("#sec3_accordion .accordion-collapse");

sec3Items.forEach(item => {
  item.addEventListener("shown.bs.collapse", function () {

    const id = this.id;
    const newImage = this.dataset.image;

    // If accordion 3 is opened
    if (id === "sec3_collapseThree") {

      sec3Image.style.display = "none";
      sec3Carousel.classList.remove("d-none");

    } 
    else {

      sec3Image.style.display = "block";
      sec3Carousel.classList.add("d-none");

      sec3Image.src = newImage;
    }

  });
});
// Section 3: Carousel Button Image Switch
const buttons = document.querySelectorAll("#sec3_carousel button");
const carouselImage = document.getElementById("sec3_carouselImage");
let currentIndex = 0; // keep track of current active button

buttons.forEach((btn, index) => {
  btn.addEventListener("click", function () {

    const newImg = this.dataset.image;
    carouselImage.src = newImg;

    // restart animation
    carouselImage.classList.remove("drop-animation");
    void carouselImage.offsetWidth; // force reflow
    carouselImage.classList.add("drop-animation");

    // remove active from all buttons
    buttons.forEach(b => b.classList.remove("active"));

    // add active to clicked button
    this.classList.add("active");

    // sync currentIndex with clicked button
    currentIndex = index;
  });
});

// Auto-slide
setInterval(() => {
  currentIndex++; // move to next button

  if (currentIndex >= buttons.length) {
    currentIndex = 0; // loop back to first
  }

  buttons[currentIndex].click(); // trigger click on current button
}, 2800);

//section 4: Accordion Image Change
const Fourth_image = document.getElementById("Fourth_Image1");
const Fourth_accordionItems = document.querySelectorAll("#sec4 .accordion-collapse");

Fourth_accordionItems.forEach(item => {
  item.addEventListener("shown.bs.collapse", function () {
    const newImage = this.dataset.image;
    Fourth_image.src = newImage;
  });
});

