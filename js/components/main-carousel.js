//1 Pegar todo o HTML >> document
//2 Pegar botão  "elemento do css, pegar pelo identificador" >> querySelector
//3 Saber que está sendo clicado (criar evento para o click nele) >> addEventListener>click,function

// 4 Movero o elemento
//Acessar a janela (browser) >> window
//Pegar todo o HTML >> document
//Pegar o element>> elemento do css, pegar pelo identificador dele

const btnLeft = document.querySelector(".button-arrow.-left");
const elementLeft = document.querySelector(".elements");
var pixels = 0;

btnLeft.addEventListener("click", function () {
  pixels = pixels - 100;
  elementLeft.style = `transform: translateX(${pixels}px)`;
});

const btnRight = document.querySelector(".button-arrow.-right");
const elementRight = document.querySelector(".elements");
var pixels = 0;

btnRight.addEventListener("click", function () {
  pixels = pixels + 100;
  elementRight.style = `transform: translateX(${pixels}px)`;
});
