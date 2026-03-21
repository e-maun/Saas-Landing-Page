const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // 50px down
    navbar.classList.add('bg-white', 'shadow');
    navbar.classList.remove('navbar-dark'); // optional, switch text color
    
  } else {
    navbar.classList.remove('bg-white', 'shadow');
   
  }
});

//section 2: Accordion Image Change
const image = document.getElementById("Second_Image1");
const accordionItems = document.querySelectorAll(".accordion-collapse");

accordionItems.forEach(item => {
  item.addEventListener("shown.bs.collapse", function () {
    const newImage = this.dataset.image;
    image.src = newImage;
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

buttons.forEach(btn => {
  btn.addEventListener("click", function () {

    const newImg = this.dataset.image;
    carouselImage.src = newImg;

    // remove active from all
    buttons.forEach(b => b.classList.remove("active"));

    // add active to clicked
    this.classList.add("active");

  });
});