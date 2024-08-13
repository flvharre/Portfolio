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



    // /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
    // function myFunction() {
    //   var x = document.getElementById("navbar");
    //   if (x.style.display === "block") {
    //     x.style.display = "none";
    //   } else {
    //     x.style.display = "block";
    //   }
    // }



    const menu = document.querySelector("#navbar");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon = document.querySelector(".xmark");
const menuIcon = document.querySelector(".fa-bars");

function toggleMenu() {

  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    hamburger.classList.remove("inMenu");
    closeIcon.classList.remove("show-before");

  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    hamburger.classList.add("inMenu");
    closeIcon.classList.add("show-before");
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)


  });
  