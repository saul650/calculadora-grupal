const perimetroDelCuadrado = (ladoDelCuadrado) => ladoDelCuadrado * 4;
const areaDelCuadrado = (ladoDelCuadrado) => ladoDelCuadrado * ladoDelCuadrado;

var calcularAreaCuadrado = () => {

    const ladoDelCuadrado = document.querySelector("#lado-cuadrado").value;
    const resultado = areaDelCuadrado(ladoDelCuadrado)
    document.querySelector("#resultado").innerHTML = resultado
}
//nichar

const areaDelCirculo = (radio) => Math.PI * Math.pow(radio, 2);
const perimetroDelCirculo = (radio) => 2*Math.PI*radio;

var calcularAreaCirculo = () => {

    const radio = document.querySelector("#radio-circulo").value;
    const resultado = areaDelCirculo(radio)
    document.querySelector("#resultado-area").innerHTML = resultado
}

var calcularPerimetroCirculo = () => {

    const radio = document.querySelector("#radio-circulo").value;
    const resultado = perimetroDelCirculo(radio)
    document.querySelector("#resultado-perimetro").innerHTML = resultado
}
//saul
