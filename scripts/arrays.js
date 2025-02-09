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
  console.log(datos[0]);
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
