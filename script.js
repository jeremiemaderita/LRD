// La "base de datos" de tus fotos, usando rutas relativas.
const mediaDatabase = [
    { url: 'fotosLRD/1.png' },
    { url: 'fotosLRD/2.png' },
    { url: 'fotosLRD/3.png' },
    { url: 'fotosLRD/4.png' },
    { url: 'fotosLRD/5.png' },
    { url: 'fotosLRD/6.png' },
    { url: 'fotosLRD/7.png' },
    { url: 'fotosLRD/8.png' },
    { url: 'fotosLRD/9.png' },
    { url: 'fotosLRD/10.png' },
    { url: 'fotosLRD/11.png' },
    { url: 'fotosLRD/12.png' },
    { url: 'fotosLRD/13.png' },
    { url: 'fotosLRD/14.png' },
    { url: 'fotosLRD/15.png' },
    { url: 'fotosLRD/16.png' },
    { url: 'fotosLRD/17.png' },
    { url: 'fotosLRD/18.png' },
    { url: 'fotosLRD/19.png' },
    { url: 'fotosLRD/20.png' },
    { url: 'fotosLRD/21.png' },
    { url: 'fotosLRD/22.png' },
    { url: 'fotosLRD/23.png' },
    { url: 'fotosLRD/24.png' },
    { url: 'fotosLRD/25.png' },
    { url: 'fotosLRD/26.png' },
    { url: 'fotosLRD/27.png' },
    { url: 'fotosLRD/28.png' },
    { url: 'fotosLRD/29.png' },
    { url: 'fotosLRD/30.png' },
    { url: 'fotosLRD/31.png' },
    { url: 'fotosLRD/32.png' },
    { url: 'fotosLRD/33.png' },
    { url: 'fotosLRD/34.png' },
    { url: 'fotosLRD/35.png' },
    { url: 'fotosLRD/36.png' },
    { url: 'fotosLRD/37.png' },
    { url: 'fotosLRD/38.png' },
    { url: 'fotosLRD/39.png' },
    { url: 'fotosLRD/40.png' },
    { url: 'fotosLRD/41.png' },
    { url: 'fotosLRD/42.png' },
    { url: 'fotosLRD/43.png' },
    { url: 'fotosLRD/44.png' },
    { url: 'fotosLRD/45.png' },
    { url: 'fotosLRD/46.png' },
    { url: 'fotosLRD/47.png' },
    { url: 'fotosLRD/48.png' },
    { url: 'fotosLRD/49.png' },
    { url: 'fotosLRD/50.png' },
    { url: 'fotosLRD/51.png' },
    { url: 'fotosLRD/52.png' },
    { url: 'fotosLRD/53.png' },
    { url: 'fotosLRD/54.png' },
    { url: 'fotosLRD/55.png' },
    { url: 'fotosLRD/56.png' },
    { url: 'fotosLRD/57.png' },
    { url: 'fotosLRD/58.png' },
    { url: 'fotosLRD/59.png' },
    { url: 'fotosLRD/60.png' },
    { url: 'fotosLRD/61.png' },
    { url: 'fotosLRD/62.png' },
    { url: 'fotosLRD/63.png' },
    { url: 'fotosLRD/64.png' },
    { url: 'fotosLRD/65.png' },
    { url: 'fotosLRD/66.png' },
    { url: 'fotosLRD/67.png' },
    { url: 'fotosLRD/68.png' },
    { url: 'fotosLRD/69.png' },
    { url: 'fotosLRD/70.png' },
    { url: 'fotosLRD/71.png' },
    { url: 'fotosLRD/72.png' },
    { url: 'fotosLRD/73.png' },
    { url: 'fotosLRD/74.png' },
    { url: 'fotosLRD/75.png' },
    { url: 'fotosLRD/76.png' },
    { url: 'fotosLRD/77.png' },
    { url: 'fotosLRD/78.png' },
    { url: 'fotosLRD/79.png' },
    { url: 'fotosLRD/80.png' },
    { url: 'fotosLRD/81.png' },
    { url: 'fotosLRD/82.png' },
    { url: 'fotosLRD/83.png' },
    { url: 'fotosLRD/84.png' },
    { url: 'fotosLRD/85.png' },
    { url: 'fotosLRD/86.png' },
    { url: 'fotosLRD/87.png' },
    { url: 'fotosLRD/88.png' },
    { url: 'fotosLRD/89.png' },
    { url: 'fotosLRD/90.png' },
    { url: 'fotosLRD/91.png' },
    { url: 'fotosLRD/92.png' },
    { url: 'fotosLRD/93.png' },
    { url: 'fotosLRD/94.png' },
    { url: 'fotosLRD/95.png' },
    { url: 'fotosLRD/96.png' },
    { url: 'fotosLRD/97.png' },
    { url: 'fotosLRD/98.png' },
    { url: 'fotosLRD/99.png' },
    
    
    // Agrega más fotos aquí
];

// Obtenemos los elementos HTML que necesitamos.
const imageElement = document.getElementById('media-image');
const randomBtn = document.querySelector('.BotonRandom');

function showRandomMedia() {
    // 1. Elegimos una foto al azar del array.
    const randomIndex = Math.floor(Math.random() * mediaDatabase.length);
    const randomItem = mediaDatabase[randomIndex];
    
    // 2. Quitamos la clase "hidden" para mostrar la imagen.
    imageElement.classList.remove('hidden');

    // 3. Cambiamos la ruta de la imagen.
    imageElement.src = randomItem.url;
}

// Agregamos un "escuchador" de clic al botón.
randomBtn.addEventListener('click', showRandomMedia);

// Opcional: muestra una foto al azar al cargar la página por primera vez.
window.addEventListener('load', showRandomMedia);