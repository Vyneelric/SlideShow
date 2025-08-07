"use strict"

async function percorrerFotos(){
    const url = "http://localhost:8080/fotos"
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function SlideShow(fotos, intervalo = 3000) {
    let indiceAtual = 0;

    const imgAPI = document.getElementById("imagem-slide")
    const legendaAPI = document.getElementById("legenda-slide")

    function trocarSlide() {
        const foto = fotos[indiceAtual];
        imgAPI.src = foto.imagem;
        legendaAPI.textContent = foto.legenda;

        indiceAtual = (indiceAtual + 1) % fotos.length;
    }

    trocarSlide(); // mostrar o primeiro
    setInterval(trocarSlide, intervalo); // trocar a cada 3 segundos
}

percorrerFotos().then(fotos => {
    SlideShow(fotos, 4000); // troca a cada 4 segundos
});