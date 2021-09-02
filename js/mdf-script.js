const gallery = document.getElementById('mdf-container__gallery');
const popup = document.getElementById('mdf-popup');
const selectedImage = document.getElementById('selectedImage');

const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const selectedIndex = null;

imageIndexes.forEach((i) => {
    const image = document.createElement('img');
    image.src = `/images/galleryMdf/mdf-${i}.png`;
    image.alt = `Модельний ряд фасадів мдф`;
    image.classList.add('mdf-gallery__img');

    image.addEventListener('click' , () =>{
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `/images/galleryMdf/mdf-${i}.png`;
    });

    gallery.appendChild(image);
});