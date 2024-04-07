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