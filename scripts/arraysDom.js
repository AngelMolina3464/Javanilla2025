const selector = document.querySelectorAll(".selectorRadioOptions");
const spreid = document.getElementById("generadorCampoButton");
const focusSearch = document.querySelector(".focusSearch");

spreid.addEventListener("click", () => {
  selector.forEach((element) => {
    if (element.checked) {
      if (element.value === "name") {
        const labelName = document.createElement("label");
        const inputName = document.createElement("input");

        inputName.id = "inputName";
        labelName.textContent = "Digita el Nombre de tu Pokemon";
        focusSearch.appendChild(labelName);
        focusSearch.appendChild(inputName);
      } else if (element.value === "id") {
        const labelId = document.createElement("label");
        const inputId = document.createElement("input");

        inputId.type = "number";
        inputId.id = "inputId";
        labelId.textContent = "Digita el Numero de Tu Pokemon";
        focusSearch.appendChild(labelId);
        focusSearch.appendChild(inputId);
      }
    }
  });
});

console.log(focusSearch);
