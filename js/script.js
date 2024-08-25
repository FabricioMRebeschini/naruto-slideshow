'use strict';

const images = [
    {'id':'1', 'url':'./img/afternoon/01.jpg'},
    {'id':'2', 'url':'./img/afternoon/02.jpg'},
    {'id':'3', 'url':'./img/afternoon/03.jpg'},
    {'id':'4', 'url':'./img/afternoon/04.jpg'},
    {'id':'5', 'url':'./img/afternoon/05.jpg'},
    {'id':'6', 'url':'./img/afternoon/06.jpg'},
    {'id':'7', 'url':'./img/afternoon/07.jpg'},
    {'id':'8', 'url':'./img/afternoon/08.jpg'},
    {'id':'9', 'url':'./img/afternoon/09.jpg'},
    {'id':'10', 'url':'./img/afternoon/10.jpg'},
    {'id':'11', 'url':'./img/afternoon/11.jpg'},
    {'id':'12', 'url':'./img/afternoon/12.jpg'},
    {'id':'13', 'url':'./img/afternoon/13.jpg'},
    {'id':'14', 'url':'./img/afternoon/14.jpg'},
    {'id':'15', 'url':'./img/afternoon/15.jpg'},
    {'id':'16', 'url':'./img/afternoon/16.jpg'},
    {'id':'17', 'url':'./img/afternoon/17.jpg'},
    {'id':'18', 'url':'./img/afternoon/18.jpg'},
    {'id':'19', 'url':'./img/afternoon/19.jpg'},
    {'id':'20', 'url':'./img/afternoon/20.jpg'},
    {'id':'21', 'url':'./img/evening/01.jpg'},
    {'id':'22', 'url':'./img/evening/02.jpg'},
    {'id':'23', 'url':'./img/evening/03.jpg'},
    {'id':'24', 'url':'./img/evening/04.jpg'},
    {'id':'25', 'url':'./img/evening/05.jpg'},
    {'id':'26', 'url':'./img/evening/06.jpg'},
    {'id':'27', 'url':'./img/evening/07.jpg'},
    {'id':'28', 'url':'./img/evening/08.jpg'},
    {'id':'29', 'url':'./img/evening/09.jpg'},
    {'id':'30', 'url':'./img/evening/10.jpg'},
    {'id':'31', 'url':'./img/evening/11.jpg'},
    {'id':'32', 'url':'./img/evening/12.jpg'},
    {'id':'33', 'url':'./img/evening/13.jpg'},
    {'id':'34', 'url':'./img/evening/14.jpg'},
    {'id':'35', 'url':'./img/evening/15.jpg'},
    {'id':'36', 'url':'./img/evening/16.jpg'},
    {'id':'37', 'url':'./img/evening/17.jpg'},
    {'id':'38', 'url':'./img/evening/18.jpg'},
    {'id':'39', 'url':'./img/evening/19.jpg'},
    {'id':'40', 'url':'./img/evening/20.jpg'},
    {'id':'41', 'url':'./img/night/01.jpg'},
    {'id':'42', 'url':'./img/night/02.jpg'},
    {'id':'43', 'url':'./img/night/03.jpg'},
    {'id':'44', 'url':'./img/night/04.jpg'},
    {'id':'45', 'url':'./img/night/05.jpg'},
    {'id':'46', 'url':'./img/night/06.jpg'},
    {'id':'47', 'url':'./img/night/07.jpg'},
    {'id':'48', 'url':'./img/night/08.jpg'},
    {'id':'49', 'url':'./img/night/09.jpg'},
    {'id':'50', 'url':'./img/morning/01.jpg'},
    {'id':'51', 'url':'./img/morning/02.jpg'},
    {'id':'52', 'url':'./img/morning/03.jpg'},
    {'id':'53', 'url':'./img/morning/04.jpg'},
    {'id':'54', 'url':'./img/morning/05.jpg'},
    {'id':'55', 'url':'./img/morning/06.jpg'},
    {'id':'56', 'url':'./img/morning/07.jpg'},
    {'id':'57', 'url':'./img/morning/08.jpg'},
    {'id':'58', 'url':'./img/morning/09.jpg'},
    {'id':'59', 'url':'./img/morning/10.jpg'},
    {'id':'60', 'url':'./img/morning/11.jpg'},
    {'id':'61', 'url':'./img/morning/12.jpg'},
    {'id':'62', 'url':'./img/morning/13.jpg'},
    {'id':'63', 'url':'./img/morning/14.jpg'},
    {'id':'64', 'url':'./img/morning/15.jpg'},
    {'id':'65', 'url':'./img/morning/16.jpg'},
    {'id':'66', 'url':'./img/morning/17.jpg'},
    {'id':'67', 'url':'./img/morning/18.jpg'},
    {'id':'68', 'url':'./img/morning/19.jpg'},
    {'id':'69', 'url':'./img/morning/20.jpg'},
    {'id':'70', 'url':'./img/night/10.jpg'},
    {'id':'71', 'url':'./img/night/11.jpg'},
    {'id':'72', 'url':'./img/night/12.jpg'},
    {'id':'73', 'url':'./img/night/13.jpg'},
    {'id':'74', 'url':'./img/night/14.jpg'},
    {'id':'75', 'url':'./img/night/15.jpg'},
    {'id':'76', 'url':'./img/night/16.jpg'},
    {'id':'77', 'url':'./img/night/17.jpg'},
    {'id':'78', 'url':'./img/night/18.jpg'},
    {'id':'79', 'url':'./img/night/19.jpg'}
]

const containerItems = document.querySelector('#container-items')


const loadImages = (images,container) =>{
    images.forEach ( image =>{
        container.innerHTML += `
        <div class='item'>
            <img src='${image.url}'/>
        </div>
        `
    })
}


loadImages( images, containerItems );

let items = document.querySelectorAll('.item')

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item')
}

const next = () => {
    const lastItem = items[items.length - 1]
    containerItems.insertBefore( lastItem, items[0]);
    items = document.querySelectorAll('.item')
}


const botaoPlay = document.querySelector('.botao-play');
const audio = document.querySelector('audio');
const source = document.querySelector('audio source');
const botaoPause = document.querySelector('.botao-pause');

var playlist = ['sound/Naruto Piano Medley.mp3', 'sound/Naruto - Sadness and Sorrow.mp3']; 
var currentTrack = 0;

botaoPlay.addEventListener('click', () => {
    audio.play();
    botaoPlay.style.display = 'none';
    botaoPause.style.display = 'block';
});

botaoPause.addEventListener('click', () => {
    audio.pause();
    botaoPlay.style.display = 'block';
    botaoPause.style.display = 'none';
});

audio.addEventListener('ended', () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    source.src = playlist[currentTrack];
    audio.load();
    audio.play();
});




document.querySelector('#previous').addEventListener('click',previous)
document.querySelector('#next').addEventListener('click',next)


