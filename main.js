document.addEventListener('DOMContentLoaded', () => {
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
                const PREV_ARROW = CAT_CONTAINER.querySelector('.prev-arrow');
                const NEXT_ARROW = CAT_CONTAINER.querySelector('.next-arrow');
                
            // PREV_ARROW.classList.toggle('active');
            // NEXT_ARROW.classList.toggle('active');
            
            });


        });

    });


    // Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
let images = document.querySelectorAll(".img");
let modalImg = document.getElementById("img01");

// Loop through each image and add a click event listener
images.forEach(img => {
  img.addEventListener("click", function() {
    modal.style.display = "block";
    let srcWithoutMin = this.src.replace("-min", ""); // Remove "-min" from the source
    modalImg.src = srcWithoutMin;
  });
});

// When the user clicks on <span> (x), close the modal
myModal.onclick = function() {
  modal.style.display = "none";
}