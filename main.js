document.addEventListener('DOMContentLoaded', () => {

    function isInViewport(element) {
      let rect = element.getBoundingClientRect();
      return (
          rect.top <= (window.innerHeight)
      );
  }
  
  function handleScroll() {
    let animatedAll = document.querySelectorAll('.to-animate');
  
    animatedAll.forEach(animated => {
      if (isInViewport(animated)) {
        animated.classList.add('animate');
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);
  
  handleScroll();
  
  
      let modal = document.getElementById("myModal");
  
      let images = document.querySelectorAll("#LFP .img");
      let modalImg = document.getElementById("img01");
      
      images.forEach(img => {
        img.addEventListener("click", function() {
          openModal(this.src);
        });
      });
      
      let imgButtons = document.querySelectorAll('#creations button');
      let imagesCreation = document.querySelectorAll("#creations .img");
      
      imgButtons.forEach(button => {
        button.addEventListener("click", function() {
          let imgIndex = Array.from(imgButtons).indexOf(this);
          let correspondingImg = imagesCreation[imgIndex];
          let src = correspondingImg.src;
          if (src.includes("recette_mockup.png")) {
            src = src.replace("recette_mockup.png", "recette.jpg");
        }
          openModal(src);
        });
      });
      
      // Function to open the modal + set the modal image source
      function openModal(src) {
        modal.style.display = "flex";
        let srcWithoutMin = src.replace("-min", "");
        modalImg.src = srcWithoutMin;
      }
      
      
      let closeButton = document.getElementById('close');
      
      closeButton.onclick = function() {
          modal.style.display = "none";
          modalImg.classList.remove("zoomed");
          modalImg.style.cursor = "auto";
        }
      
        modal.addEventListener("click", function(event) {
          if (event.target === modal) {
            modal.style.display = "none";
            modalImg.classList.remove("zoomed");
            modalImg.style.cursor = "auto";
          }
      });
      
      
      // Zoom function
          
      
        modalImg.addEventListener("click", function() {
          if (modalImg.src.includes("quincaillerie") || modalImg.src.includes("recette")) {
            modalImg.classList.toggle("zoomed");
            
        }
        });
  
        modalImg.addEventListener('mouseenter', function() {
          if (modalImg.classList.contains("zoomed")) {
            modalImg.style.cursor = "crosshair";
          } else {
            if (modalImg.src.includes("quincaillerie") || modalImg.src.includes("recette")) {
              modalImg.style.cursor = "zoom-in";
            }
            else {
              modalImg.style.cursor = "default";
  
            }
            
          }
        });
        
        modalImg.addEventListener('mouseleave', function() {
          if (!modalImg.classList.contains("zoomed")) {
            modalImg.style.cursor = "default";
          }
        });
        
        modalImg.addEventListener('click', function() {
          if (modalImg.classList.contains("zoomed")) {
            modalImg.style.cursor = "crosshair";
          } else {
            if (modalImg.src.includes("quincaillerie") || modalImg.src.includes("recette")) {
              modalImg.style.cursor = "zoom-in";
            }
            else {
              modalImg.style.cursor = "default";
  
            }
            
          }
        });
  
      
        modalImg.onmousemove = function(e) {
        e.target.style.setProperty('--x',(100*e.offsetX/e.target.offsetWidth)+'%');
        e.target.style.setProperty('--y',(100*e.offsetY/e.target.offsetHeight)+'%'); 
      }


      // Fixed nav
      const navFixed = document.querySelector('#nav-fixed');
const targetElement1 = document.querySelector('#target-element1');
const targetElement2 = document.querySelector('#header_accueil');

const outOfViewport = () => {
    const target1Rect = targetElement1.getBoundingClientRect();
    const target2Rect = targetElement2.getBoundingClientRect();

    return target1Rect.bottom <= 0 && target2Rect.bottom <= 0;
};

const handleIntersection = () => {
    if (outOfViewport()) {
        navFixed.classList.add('nav-fixed-on');
    } else {
        navFixed.classList.remove('nav-fixed-on');
    }
};

const observer = new IntersectionObserver(handleIntersection);

observer.observe(targetElement1);
observer.observe(targetElement2);

const aboutLink = document.querySelector('.about-link');
const worksLink = document.querySelector('.works-link');
const contactLink = document.querySelector('.contact-link');

const setActiveClass = (entry, linkElement) => {
if (entry.isIntersecting) {
    linkElement.classList.add('active');
} else {
    linkElement.classList.remove('active');
}
};

// Callback functions
const handleAboutIntersection = (entries) => {
setActiveClass(entries[0], aboutLink);
};

const handleWorksIntersection = (entries) => {
setActiveClass(entries[0], worksLink);
};

const handleContactIntersection = (entries) => {
setActiveClass(entries[0], contactLink);
};

const options = {
root: null, // Use the viewport as the root
threshold: 0.2
};

const aboutObserver = new IntersectionObserver(handleAboutIntersection, options);
const worksObserver = new IntersectionObserver(handleWorksIntersection, options);
const contactObserver = new IntersectionObserver(handleContactIntersection, options);

const aboutSection = document.getElementById('about');
const worksSection = document.getElementById('travaux');
const contactSection = document.getElementById('contact-accueil');

aboutObserver.observe(aboutSection);
worksObserver.observe(worksSection);
contactObserver.observe(contactSection);


// Hamburger menu
const menu = document.querySelector("#links");
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
  
  
      const CAT = document.querySelectorAll('.cat');
  
  
  // Collapse
      CAT.forEach(CAT => {
          const CAT_NAME = CAT.querySelector('.cat-name');
  
  
          CAT_NAME.addEventListener('click', event => {
              event.stopPropagation();
              CAT_NAME.classList.toggle('active');
  
              
              const CAT_CONTAINER = CAT_NAME.nextElementSibling;
                  if(CAT_NAME.classList.contains('active')) {
                      CAT_CONTAINER.style.maxHeight = CAT_CONTAINER.scrollHeight + "px";
  
                  }
                  else {
                      CAT_CONTAINER.style.maxHeight = 0;
                  }
              
              });
  
          });
          
          
 