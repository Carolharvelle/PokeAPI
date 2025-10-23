'use strict';

async function loadGallery() {
const gallery = document.getElementById('gallery');
const url = 'https://pokeapi.co/api/v2/pokemon?limit=500';
const response = await fetch(url);
const Pokemon = await response.json();
console.log (Pokemon);
Pokemon.results.forEach(async pokemon => {
    const response = await fetch(pokemon.url);
    const pokemonData = await response.json();
    const alink = document.createElement('a');
    alink.href = `pokemon.html?id=${pokemon.url.split('/')[6]}`;
    gallery.appendChild(alink);
    const img = document.createElement('img');
    img.src = pokemonData.sprites.front_default;
    alink.appendChild(img);
});
console.log(response);

}
loadGallery();