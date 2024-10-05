document.addEventListener('DOMContentLoaded', function() {
    // Array of image elements
    const images = document.querySelectorAll('.hero-img');
    let currentImageIndex = 0;

    // Function to switch to next image
    function nextImage() {
      images[currentImageIndex].classList.remove('active');
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].classList.add('active');
    }

    // Automatically switch images every 5 seconds
    setInterval(nextImage, 5000);
  });

  // Menu toggler
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });