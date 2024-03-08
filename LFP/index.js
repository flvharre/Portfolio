document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
  
    let currentIndex = 0;
  
    function showItem(index) {
      if (index < 0) {
        index = carouselItems.length - 1;
      } else if (index >= carouselItems.length) {
        index = 0;
      }
  
      carousel.style.transform = `translateX(-${index * 100}%)`;
      currentIndex = index;
    }
  
    prevButton.addEventListener('click', () => {
      showItem(currentIndex - 1);
    });
  
    nextButton.addEventListener('click', () => {
      showItem(currentIndex + 1);
    });
  
    // Show the initial item
    showItem(currentIndex);
  });
  