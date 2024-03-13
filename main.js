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

