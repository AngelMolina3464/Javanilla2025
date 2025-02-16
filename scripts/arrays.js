const bd = [];

fetch("/data/pokemon.json")
  .then((response) => response.json())
  .then((data) => {
    saveData(data);
  })
  .catch((error) => {
    console.error("Error al cargar el archivo JSON:", error);
  });

const saveData = (arrayObjet) => {
  arrayObjet.forEach((element) => {
    bd.push(element);
    return bd;
  });
};

const loadJsonData = async () => {
  try {
    const response = await fetch("/data/pokemon.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al cargar el archivo JSON:", error);
  }
};

loadJsonData().then((datos) => {
  console.log(datos);
  datos.forEach((entidad) => {
    /**
     * 
    entidad.id <= 20
      ? console.log(entidad.id, entidad.name.english, entidad.image.hires)
      : "";
     * 
    */
  });
});

export const loadJsonDataSelect = async (selectEntrie) => {
  // 3
  try {
    const response = await fetch("/data/pokemon.json");
    const data = await response.json();
    const dataFiltered = data.filter((element) => {
      //element[selectEntrie - 1].id === selectEntrie;
    });
    console.log(dataFiltered);
    // 3
    return dataFiltered;
  } catch (error) {
    console.log("Mensaje de error:", error);
  }
};
