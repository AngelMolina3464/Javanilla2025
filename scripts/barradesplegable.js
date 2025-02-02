const barraPadre = document.querySelectorAll(".barraNativa__padre");

barraPadre.forEach((item) => {
  const barraHijo = item.children[0];
  item.addEventListener("click", () => {
    barraHijo.style.display === "none"
      ? (barraHijo.style.display = "block")
      : (barraHijo.style.display = "none"); // Ocultar el elemento
  });
});

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
      ? (item.style.backgroundColor = "rgba(238, 238, 238, 0.95)")
      : (item.style.backgroundColor = "rgba(255, 255, 255, 0.03)");
  });
});
