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
                
            PREV_ARROW.classList.toggle('active');
            NEXT_ARROW.classList.toggle('active');
            
            });

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

