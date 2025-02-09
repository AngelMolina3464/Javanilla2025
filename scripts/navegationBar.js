/*
**
Version Anterior de la Barra desplegable 
const navegacionmodel = [
  "inicialBar",
  "selectFrontEndBar",
  "scriptingSelectorBar",
];

const dirURL = (iteradorMenu) => {
  const selectorNavbar = document.getElementById(navegacionmodel[iteradorMenu]);
  const valorURL = selectorNavbar.value;
  valorURL !== "" ? (window.location.href = valorURL) : "";
  console.log(valorURL);
};


 */ 

const barraAgrupacion = document.querySelectorAll(".barraNativa__Agrupacion");
//console.log(barraAgrupacion);
barraAgrupacion.forEach((item) => {
  const signoBloque = item.childNodes[1];
  const barraDesplegable = item.childNodes[3];


  item.addEventListener("click", () => {
    barraDesplegable.style.display === "none"
      ? (barraDesplegable.style.display = "block")
      : (barraDesplegable.style.display = "none"); 

    barraDesplegable.style.display === "block"
      ? (signoBloque.innerHTML = "↑")
      : (signoBloque.innerHTML = "↓");

    barraDesplegable.style.display === "block"
      ? (item.style.backgroundColor = "rgba(238, 238, 238, 0.23)")
      : (item.style.backgroundColor = "rgba(255, 255, 255, 0.03)");
  });
});
