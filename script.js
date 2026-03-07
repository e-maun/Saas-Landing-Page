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
