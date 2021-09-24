const sendData = () => {
  let formulario = document.getElementById("form1");
  const nombre = formulario[0];
  const direccion = formulario[1];
  const tipo = formulario[2];
  const comentarios = formulario[3];
  const foto = formulario[4];

  let error = [];

  if (nombre.value.length < 4 && nombre.value.length > 50) {
    error.push(nombre.name);
  }
  if (direccion.value.length < 5) {
    error.push(direccion.name);
  }
  if (tipo === 0) {
    error.push(tipo.name);
  }
  if (comentarios.value.length > 1000) {
    error.push(comentarios.name);
  }

  let fileArr = foto.value.split(".");

  if (!["jpg", "jpeg", "png"].includes(fileArr[fileArr.length - 1])) {
    error.push(foto.name);
  }

  if (error.length > 0) {
    const fields = error.join(", ");
    alert("Su formulario falló en: " + fields);
  } else {
    console.log(foto);
  }
};
