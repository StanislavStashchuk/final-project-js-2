const gallery = document.getElementById('mdf-container__gallary');
const popup = document.getElementById('mdf-popup');
const selectedImage = document.getElementById('selectedImage');

const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const selectedIndex = null;

imageIndexes.forEach(i => {
    const image = document.createElement('img');
    image.src = `/images/gallaryMdf/mdf-${i}.png`;
    image.alt = `Модельний ряд фасадів мдф`;
    image.classList.add('mdf-gallary__img');

    image.addEventListener('click', () => {
        //popup
    });

    gallery.appendChild(image);

})