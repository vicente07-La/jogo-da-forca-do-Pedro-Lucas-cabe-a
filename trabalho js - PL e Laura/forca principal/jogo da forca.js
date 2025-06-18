let forca =  document.getElementById("imagem");
let palavra = document.getElementById("letras");
let erro = 0;
let corpo = ["../img.css/forca.png (1.7).png","../img.css/forca (1.2).png","../img.css/forca.(1.3).png","../img.css/forca (1.4).png","../img.css/forca (1.5).png","../img.css/forca (1.6).png","../img.css/forca (1).png"];
let palavras = [palavra.textContent];
alert(palavras[0])
function addCorpo(){
    forca.src = corpo[erro];
}
addCorpo();

function addLetras(){

}
/*do{
addCorpo();
}while(erro != 6)*/



