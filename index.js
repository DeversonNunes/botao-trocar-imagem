let imagem1 = "src/imagem/bow-major-river-running-through-600nw-1226874283.jpg"
let imagem2 = "src/imagem/265129.jpeg"
let imagemAtual= "src/imagem/bc4c76a82e03214fe264bcbc42250869.jpg"

function trocarImagem() {
    document.getElementById('figure').src= imagemAtual;
    let aux= imagemAtual
    imagemAtual=imagem1
    imagem1 = aux

    let auxi= imagemAtual

    imagemAtual= imagem2
     imagem2 = auxi
}