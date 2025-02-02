const preliminarArea = document.getElementById("vistaPreliminar");
const conceptos = document.querySelectorAll(`[dataAbsortion="entries"]`);

const modeloDatos = {
  fechaDocumento: "",
  productoServicio: "",
  cantidad: 0,
  precioUnitario: 0,
  importe: 0,

  mostrarInfo: function () {
    return `
      Fecha Documento: ${this.fechaDocumento}
      Producto/Servicio: ${this.productoServicio}
      Cantidad: ${this.cantidad}
      Precio Unitario: ${this.precioUnitario}
      Importe: $ ${this.importe} MXN
    `;
  },
};

// Onclick del Boton Tomar Datos
const tomarDatos = () => {
  conceptos.forEach((items) => {
    items.id === "fechaDocumento"
      ? (modeloDatos.fechaDocumento = items.value)
      : "";
    items.id === "concepto" ? (modeloDatos.productoServicio = items.value) : "";
    items.id === "cantidad"
      ? (modeloDatos.cantidad = parseFloat(items.value))
      : 0;
    items.id === "precioUnitario"
      ? (modeloDatos.precioUnitario = parseFloat(items.value))
      : 0;

    modeloDatos.cantidad > 0 && modeloDatos.precioUnitario > 0
      ? (modeloDatos.importe =
          modeloDatos.cantidad * modeloDatos.precioUnitario)
      : (modeloDatos.importe = 0);
  });

  preliminarArea.innerHTML = modeloDatos.mostrarInfo();
};

// Onclick del Boton Para Limpiar Datos
const limpiarDatos = () => {
  const concepto = document.getElementById("concepto");
  const cantidad = document.getElementById("cantidad");
  const precioUnitario = document.getElementById("precioUnitario");

  concepto.value = "";
  cantidad.value = 0;
  precioUnitario.value = 0;
  preliminarArea.innerHTML = "";
};
