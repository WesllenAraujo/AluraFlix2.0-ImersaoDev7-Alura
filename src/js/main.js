function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    var elementoListaFilmes = document.getElementById("listaFilmes");
    var trailerUrl = document.getElementById("trailer").value;
    if (filmeFavorito.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + `<a href="${trailerUrl}" target="_blank"><img src="${filmeFavorito}">`;
        document.getElementById("filme").value = ''; 
    } else {
        alert("URL inserida não é suportada. Por favor, insira uma URL de imagem válida")
        document.getElementById("filme").value = ''; 
    }
}