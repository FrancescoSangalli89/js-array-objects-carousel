// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

const imagesList = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const imagesDom = document.querySelector('.images');
const thumbsnailDom = document.querySelector('.thumbs-container');


imagesList.forEach((image, index) => {
    imagesDom.innerHTML += `<div class="image">
                                <img src="${image.url}" alt="photo 1">
                                <h3 class="title">${image.title}</h3>
                                <p class="text">${image.description}</p>
                            </div>`;

    const currentThumbs = document.createElement('div');
    currentThumbs.classList.add('thumbsnail');
    currentThumbs.innerHTML = `<img src="${image.url}" alt="photo 1">`;

    currentThumbs.addEventListener('click', function () {
        goToSlide(index);
    });

    thumbsnailDom.append(currentThumbs);
})

let activeImage = 0;

const imgList = document.getElementsByClassName('image');

imgList[activeImage].classList.add('show');

const thumbsList = document.getElementsByClassName('thumbsnail');

thumbsList[activeImage].classList.add('active');

for (let i = 0; i < thumbsList.length; i++) {
    thumbsList[i].style.width = `calc(100% / ${imagesList.length})`
}

const lx = document.querySelector('.lx');

lx.addEventListener('click',
    function () {
        imgList[activeImage].classList.remove('show');
        thumbsList[activeImage].classList.remove('active');
        if (activeImage == imagesList.length - 1) {
            activeImage = 0;
        } else {
            activeImage++;
        }
        imgList[activeImage].classList.add('show');
        thumbsList[activeImage].classList.add('active');
    }
)
const rx = document.querySelector('.rx');

rx.addEventListener('click',
    function () {
        imgList[activeImage].classList.remove('show');
        thumbsList[activeImage].classList.remove('active');
        if (activeImage == 0) {
            activeImage = imagesList.length - 1;
        } else {
            activeImage--;
        }
        imgList[activeImage].classList.add('show');
        thumbsList[activeImage].classList.add('active');
    }
)

function goToSlide(position) {
    imgList[activeImage].classList.remove('show');
    thumbsList[activeImage].classList.remove('active');

    activeImage = position;

    imgList[activeImage].classList.add('show');
    thumbsList[activeImage].classList.add('active');
}