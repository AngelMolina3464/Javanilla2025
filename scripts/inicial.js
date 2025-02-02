`use strict`;

const model = {
  nombre: "nombre de la entidad",
  serie: "56161-46416-46116",
  fav: [
    "Python",
    "CSS",
    {
      JsI: "Basico",
      Js2: "Intermedio",
      Js3: "Avanzado",
    },
  ],
  actividad: true,
};

if (model.actividad) {
  console.log(model);
} else {
  console.log("usuario desactivado");
}

function calcualarAvanceCompleto (bloqueActual){
    const numeroBloques = 378;
    const porcentAvance = bloqueActual / numeroBloques;
    console.log(`Avance ----> % ${(porcentAvance*100).toFixed(2)}`);
}

const calcualarAvance = (bloqueActual) => {
  const numeroBloques = 378;
  const porcentAvance = bloqueActual / numeroBloques;
  console.log(`Avance ----> % ${(porcentAvance*100).toFixed(2)}`);
};

calcualarAvance(32);