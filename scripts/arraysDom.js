import { Pokemon } from "../class/pokemonObject.js";
import { loadJsonDataSelect } from "../scripts/arrays.js";

const selector = document.querySelectorAll(".selectorRadioOptions");
const spreid = document.getElementById("generadorCampoButton");
const spreidSearch = document.querySelector(".focusSearch button");
const focusSearch = document.querySelector(".focusSearch");

spreid.addEventListener("click", () => {
  selector.forEach((element) => {
    if (element.checked) {
      const inputMorph = document.querySelector(".focusSearch input");
      const labelMorph = document.querySelector(".focusSearch label");
      focusSearch.style.display = "flex";
      if (element.value === "name") {
        inputMorph.id = "inputName";
        inputMorph.type = "text";
        labelMorph.textContent = "Digita el Nombre de tu Pokemon";
      } else if (element.value === "id") {
        inputMorph.id = "inputId";
        labelMorph.textContent = "Digita iD de tu Pokemon";
        inputMorph.type = "number";
      }
    }
  });
});

spreidSearch.addEventListener("click", () => {
  const entidad = new Pokemon(
    25,
    "Pikachu",
    "ピカチュウ",
    "Eléctrico",
    null,
    "https://example.com/pikachu.png"
  );

  entidad.mostrarDetalles();
  if (document.querySelector(".focusSearch input")) {
    console.log("Tomara del input ");
    console.log(document.querySelector(".focusSearch input").value);
    loadJsonDataSelect(2).then((datos) => {
      console.log(datos);
    });
    // Instancia de la Entidad
  } else {
    console.log("No hay Datos");
  }
});
