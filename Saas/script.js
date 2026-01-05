const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // 50px down
    navbar.classList.add('bg-white', 'shadow');
    navbar.classList.remove('navbar-dark'); // optional, switch text color
    
  } else {
    navbar.classList.remove('bg-white', 'shadow');
   
  }
});