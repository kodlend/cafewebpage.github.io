const header = document.getElementById('header');

// Function to handle scroll event
function handleScroll() {
  // Calculate how far the user has scrolled down the page
  const scrollY = window.scrollY || window.pageYOffset;
  
  // Calculate the opacity based on the scroll position
  const opacity = 1 - (scrollY / window.innerHeight);

  // Set the opacity of the header
  header.style.opacity = opacity <= 0 ? '0' : opacity.toString();
}

// Add scroll event listener to the window
window.addEventListener('scroll', handleScroll);