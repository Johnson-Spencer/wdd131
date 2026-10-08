//1. Grab out HTML elements
let gallerySection = document.querySelector('.gallery');
let modal = document.querySelector('dialog');
let modalImg = modal.querySelector('img');
let closeButton = modal.querySelector('.close-viewer');

//2.Add a Event listener, when img clicked open modal
gallerySection.addEventListener('click', (event) => {
   if(event.target.src !== undefined) {
       // display modal
       modal.showModal();
       // set the src image of modal
       modalImg.src = event.target.src.replace('-sm', '-full');
   }
})


//3.
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});