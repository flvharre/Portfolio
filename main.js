document.addEventListener('DOMContentLoaded', () => {
    const cat = document.querySelectorAll('.cat');


// Collapse
    cat.forEach(cat => {
        const catName = cat.querySelector('.cat-name');


        catName.addEventListener('click', event => {
            event.stopPropagation(); // Preventing the event from bubbling up to the document
            catName.classList.toggle('active');
            
            const catContainer = catName.nextElementSibling;
                if(catName.classList.contains('active')) {
                    catContainer.style.maxHeight = catContainer.scrollHeight + "px";
                }
                else {
                    catContainer.style.maxHeight = 0;
                }
                const prevArrow = catContainer.querySelector('.prev-arrow');
                const nextArrow = catContainer.querySelector('.next-arrow');
                
            prevArrow.classList.toggle('active');
            nextArrow.classList.toggle('active');


            
            });
        });


    
// next and prev buttons
const cardContainers = [...document.querySelectorAll('.cards-container')];
const nextButton = [...document.querySelectorAll('.next-arrow')];
const prevButton = [...document.querySelectorAll('.prev-arrow')];

    cardContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;
    
        nextButton[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })
    
        prevButton[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    });


// DOWNLOAD AT CLICK


const downloadLink = document.getElementById('CV');

    downloadLink.addEventListener('click', (event) => {

        // Perform download
        const url = downloadLink.getAttribute('href');
        const filename = url.substring(url.lastIndexOf('/') + 1);
        downloadFile(url, filename);
    });
});

function downloadFile(url, filename) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error downloading file:', error));


    };

