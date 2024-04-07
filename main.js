document.addEventListener('DOMContentLoaded', () => {

    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
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
  
  // Ajouter un gestionnaire de scroll
  window.addEventListener('scroll', handleScroll);
  
  // Gérer les animations au chargement initial de la page
  handleScroll();
  
  
      // Get the modal
      let modal = document.getElementById("myModal");
  
      // Get the image and insert it inside the modal
      let images = document.querySelectorAll("#LFP .img");
      let modalImg = document.getElementById("img01");
      
      // Loop through each image and add a click event listener
      images.forEach(img => {
        img.addEventListener("click", function() {
          openModal(this.src);
        });
      });
      
      let imgButtons = document.querySelectorAll('#creations button');
      let imagesCreation = document.querySelectorAll("#creations .img");
      
      // Loop through each button and add a click event listener
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
      
      // Function to open the modal and set the modal image source
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
  
  
  });
  
  
      const CAT = document.querySelectorAll('.cat');
  
  
  // Collapse
      CAT.forEach(CAT => {
          const CAT_NAME = CAT.querySelector('.cat-name');
  
  
          CAT_NAME.addEventListener('click', event => {
              event.stopPropagation(); // Preventing the event from bubbling up to the document
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
          
          
          const navFixed = document.querySelector('#nav-fixed');
          const targets = document.querySelectorAll('.target-element');
          
          // Function to check if all target elements are out of the viewport
          const allTargetsOutOfViewport = (entries) => {
              return entries.every(entry => !entry.isIntersecting);
          };
          
          // Callback function to be executed when the target intersects with the viewport
          const handleIntersection = (entries, observer) => {
              if (allTargetsOutOfViewport(entries)) {
                  navFixed.classList.add('nav-fixed-on');
              } else {
                  navFixed.classList.remove('nav-fixed-on');
              }
          };
          
          // Options for the intersection observer
          const options = {
              root: null, // Use the viewport as the root
              threshold: 0.2 // Trigger the callback when at least 50% of the target element is visible
          };
          
          // Create an intersection observer instance with the callback function and options
          const observer = new IntersectionObserver(handleIntersection, options);
          
          // Start observing each target element
          targets.forEach(target => {
              observer.observe(target);
          });


          const aboutLink = document.querySelector('.about-link');
const worksLink = document.querySelector('.works-link');
const contactLink = document.querySelector('.contact-link');

const setActiveClass = (entry, linkElement) => {
    if (entry.isIntersecting) {
        linkElement.classList.add('active');
        console.log('active class ok', linkElement.textContent);
    } else {
        linkElement.classList.remove('active');
    }
};

// Callback function for the Intersection Observer for the 'about' section
const handleAboutIntersection = (entries) => {
    setActiveClass(entries[0], aboutLink);
};

// Callback function for the Intersection Observer for the 'works' section
const handleWorksIntersection = (entries) => {
    setActiveClass(entries[0], worksLink);
};

// Callback function for the Intersection Observer for the 'contact' section
const handleContactIntersection = (entries) => {
    setActiveClass(entries[0], contactLink);
};

// Create Intersection Observer instances for each target element
const aboutObserver = new IntersectionObserver(handleAboutIntersection, options);
const worksObserver = new IntersectionObserver(handleWorksIntersection, options);
const contactObserver = new IntersectionObserver(handleContactIntersection, options);

// Start observing each target element
const aboutSection = document.getElementById('about');
const worksSection = document.getElementById('travaux');
const contactSection = document.getElementById('contact-accueil');

aboutObserver.observe(aboutSection);
worksObserver.observe(worksSection);
contactObserver.observe(contactSection);