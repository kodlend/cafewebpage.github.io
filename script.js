/* const header = document.getElementById('header');

function handleScroll() {
<<<<<<< Updated upstream
  const scrollY = window.scrollY || window.pageYOffset;
  
  const opacity = 1 - (scrollY / window.innerHeight);

  header.style.opacity = opacity <= 0 ? '0' : opacity.toString();
}

window.addEventListener('scroll', handleScroll); */
=======
  
  const scrollY = window.scrollY || window.pageYOffset;
  
  
  const opacity = 1 - (scrollY / window.innerHeight);


  header.style.opacity = opacity <= 0 ? '0' : opacity.toString();
}


window.addEventListener('scroll', handleScroll);
>>>>>>> Stashed changes
