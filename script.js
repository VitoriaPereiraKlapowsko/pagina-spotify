const searchInput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) { /*Aqui estou consomindo a api a partir do searchTerm que o que o usuário digitou no input*/
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`  /*Se o usuário digitar um A por exemplo pode até travar o sistema pois vão ser carregadas muitas informações, então pode se colocar 
    o termo que seja parececido com o que o usuário digitou ?name_like(para dizer que tem um nome parecido) e o =$ (para dizer que é o termo que o usuário digitou)*/
    fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}

function displayResults(result) {//Fazendo com que os cards apareçam com as informações do artista que o usuário digitou
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });
    resultArtists.classList.remove('hidden');
}

document.addEventListener('input', function() {  /* Serve quando o usuário for digitar algo no input tudo fique oculto e só apareça o que foi digitado, caso o usuário não digite nada os cards ficaram na mesma posição sem se alterar*/
    const  searchTerm = searchInput.value.toLowerCase();
    if(searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtists.classList.remove('hidden');
        return;
    }
    requestApi(searchTerm);
})