// diccionario con las regiones y sus respectivas comunas
const regiones = [
  {
    region: "Arica y Parinacota",
    numero: "XV",
    comunas: ["Arica", "Camarones", "General Lagos", "Putre"],
  },
  {
    region: "Tarapacá",
    numero: "I",
    comunas: [
      "Alto Hospicio",
      "Camiña",
      "Colchane",
      "Huara",
      "Iquique",
      "Pica",
      "Pozo Almonte",
    ],
  },
  {
    region: "Antofagasta",
    numero: "II",
    comunas: [
      "Antofagasta",
      "Calama",
      "María Elena",
      "Mejillones",
      "Ollagüe",
      "San Pedro de Atacama",
      "Sierra Gorda",
      "Taltal",
      "Tocopilla",
    ],
  },
  {
    region: "Atacama",
    numero: "III",
    comunas: [
      "Alto del Carmen",
      "Caldera",
      "Chañaral",
      "Copiapó",
      "Diego de Almagro",
      "Freirina",
      "Huasco",
      "Tierra Amarilla",
      "Vallenar",
    ],
  },
  {
    region: "Coquimbo",
    numero: "IV",
    comunas: [
      "Andacollo",
      "Canela",
      "Combarbalá",
      "Coquimbo",
      "Illapel",
      "La Higuera",
      "La Serena",
      "Los Vilos",
      "Monte Patria",
      "Ovalle",
      "Paiguano",
      "Punitaqui",
      "Río Hurtado",
      "Salamanca",
      "Vicuña",
    ],
  },
  {
    region: "Valparaíso",
    numero: "V",
    comunas: [
      "Algarrobo",
      "Cabildo",
      "Calera",
      "Calle Larga",
      "Cartagena",
      "Casablanca",
      "Catemu",
      "Concón",
      "El Quisco",
      "El Tabo",
      "Hijuelas",
      "Isla de Pascua",
      "Juan Fernández",
      "La Cruz",
      "La Ligua",
      "Limache",
      "Llaillay",
      "Los Andes",
      "Nogales",
      "Olmué",
      "Panquehue",
      "Papudo",
      "Petorca",
      "Puchuncaví",
      "Putaendo",
      "Quillota",
      "Quilpué",
      "Quintero",
      "Rinconada",
      "San Antonio",
      "San Esteban",
      "San Felipe",
      "Santa María",
      "Santo Domingo",
      "Valparaíso",
      "Villa Alemana",
      "Viña del Mar",
      "Zapallar",
    ],
  },
  {
    region: "Metropolitana de Santiago",
    numero: "MET",
    comunas: [
      "Alhué",
      "Buin",
      "Calera de Tango",
      "Cerrillos",
      "Cerro Navia",
      "Colina",
      "Conchalí",
      "Curacaví",
      "El Bosque",
      "El Monte",
      "Estación Central",
      "Huechuraba",
      "Independencia",
      "Isla de Maipo",
      "La Cisterna",
      "La Florida",
      "La Granja",
      "La Pintana",
      "La Reina",
      "Lampa",
      "Las Condes",
      "Lo Barnechea",
      "Lo Espejo",
      "Lo Prado",
      "Macul",
      "Maipú",
      "María Pinto",
      "Melipilla",
      "Ñuñoa",
      "Padre Hurtado",
      "Paine",
      "Pedro Aguirre Cerda",
      "Peñaflor",
      "Peñalolén",
      "Pirque",
      "Providencia",
      "Pudahuel",
      "Puente Alto",
      "Quilicura",
      "Quinta Normal",
      "Recoleta",
      "Renca",
      "San Bernardo",
      "San Joaquín",
      "San José de Maipo",
      "San Miguel",
      "San Pedro",
      "San Ramón",
      "Santiago",
      "Talagante",
      "Tiltil",
      "Vitacura",
    ],
  },
  {
    region: "Libertador Gral. Bernardo O’Higgins",
    numero: "VI",
    comunas: [
      "Chimbarongo",
      "Chépica",
      "Codegua",
      "Coinco",
      "Coltauco",
      "Doñihue",
      "Graneros",
      "La Estrella",
      "Las Cabras",
      "Litueche",
      "Lolol",
      "Machalí",
      "Malloa",
      "Marchihue",
      "Nancagua",
      "Navidad",
      "Olivar",
      "Palmilla",
      "Paredones",
      "Peralillo",
      "Peumo",
      "Pichidegua",
      "Pichilemu",
      "Placilla",
      "Pumanque",
      "Quinta de Tilcoco",
      "Rancagua",
      "Rengo",
      "Requínoa",
      "San Fernando",
      "San Francisco de Mostazal",
      "San Vicente de Tagua Tagua",
      "Santa Cruz",
    ],
  },
  {
    region: "Maule",
    numero: "VII",
    comunas: [
      "Cauquenes",
      "Chanco",
      "Colbún",
      "Constitución",
      "Curepto",
      "Curicó",
      "Empedrado",
      "Hualañé",
      "Licantén",
      "Linares",
      "Longaví",
      "Maule",
      "Molina",
      "Parral",
      "Pelarco",
      "Pelluhue",
      "Pencahue",
      "Rauco",
      "Retiro",
      "Romeral",
      "Río Claro",
      "Sagrada Familia",
      "San Clemente",
      "San Javier de Loncomilla",
      "San Rafael",
      "Talca",
      "Teno",
      "Vichuquén",
      "Villa Alegre",
      "Yerbas Buenas",
    ],
  },
  {
    region: "Ñuble",
    numero: "XVI",
    comunas: [
      "Bulnes",
      "Chillán Viejo",
      "Chillán",
      "Cobquecura",
      "Coelemu",
      "Coihueco",
      "El Carmen",
      "Ninhue",
      "Ñiquén",
      "Pemuco",
      "Pinto",
      "Portezuelo",
      "Quillón",
      "Quirihue",
      "Ránquil",
      "San Carlos",
      "San Fabián",
      "San Ignacio",
      "San Nicolás",
      "Treguaco",
      "Yungay",
    ],
  },
  {
    region: "Biobío",
    numero: "VIII",
    comunas: [
      "Alto Biobío",
      "Antuco",
      "Arauco",
      "Cabrero",
      "Cañete",
      "Chiguayante",
      "Concepción",
      "Contulmo",
      "Coronel",
      "Curanilahue",
      "Florida",
      "Hualpén",
      "Hualqui",
      "Laja",
      "Lebu",
      "Los Álamos",
      "Los Ángeles",
      "Lota",
      "Mulchén",
      "Nacimiento",
      "Negrete",
      "Penco",
      "Quilaco",
      "Quilleco",
      "San Pedro de la Paz",
      "San Rosendo",
      "Santa Bárbara",
      "Santa Juana",
      "Talcahuano",
      "Tirúa",
      "Tomé",
      "Tucapel",
      "Yumbel",
    ],
  },
  {
    region: "Araucanía",
    numero: "IX",
    comunas: [
      "Angol",
      "Carahue",
      "Cholchol",
      "Collipulli",
      "Cunco",
      "Curacautín",
      "Curarrehue",
      "Ercilla",
      "Freire",
      "Galvarino",
      "Gorbea",
      "Lautaro",
      "Loncoche",
      "Lonquimay",
      "Los Sauces",
      "Lumaco",
      "Melipeuco",
      "Nueva Imperial",
      "Padre las Casas",
      "Perquenco",
      "Pitrufquén",
      "Pucón",
      "Purén",
      "Renaico",
      "Saavedra",
      "Temuco",
      "Teodoro Schmidt",
      "Toltén",
      "Traiguén",
      "Victoria",
      "Vilcún",
      "Villarrica",
    ],
  },
  {
    region: "Los Ríos",
    numero: "XIV",
    comunas: [
      "Corral",
      "Futrono",
      "La Unión",
      "Lago Ranco",
      "Lanco",
      "Los Lagos",
      "Mariquina",
      "Máfil",
      "Paillaco",
      "Panguipulli",
      "Río Bueno",
      "Valdivia",
    ],
  },
  {
    region: "Los Lagos",
    numero: "X",
    comunas: [
      "Ancud",
      "Calbuco",
      "Castro",
      "Chaitén",
      "Chonchi",
      "Cochamó",
      "Curaco de Vélez",
      "Dalcahue",
      "Fresia",
      "Frutillar",
      "Futaleufú",
      "Hualaihué",
      "Llanquihue",
      "Los Muermos",
      "Maullín",
      "Osorno",
      "Palena",
      "Puerto Montt",
      "Puerto Octay",
      "Puerto Varas",
      "Puqueldón",
      "Purranque",
      "Puyehue",
      "Queilén",
      "Quellón",
      "Quemchi",
      "Quinchao",
      "Río Negro",
      "San Juan de la Costa",
      "San Pablo",
    ],
  },
  {
    region: "Aisén del Gral. Carlos Ibáñez del Campo",
    numero: "XI",
    comunas: [
      "Aisén",
      "Chile Chico",
      "Cisnes",
      "Cochrane",
      "Coihaique",
      "Guaitecas",
      "Lago Verde",
      "O’Higgins",
      "Río Ibáñez",
      "Tortel",
    ],
  },
  {
    region: "Magallanes y de la Antártica Chilena",
    numero: "XII",
    comunas: [
      "Antártica",
      "Cabo de Hornos (Ex Navarino)",
      "Laguna Blanca",
      "Natales",
      "Porvenir",
      "Primavera",
      "Punta Arenas",
      "Río Verde",
      "San Gregorio",
      "Timaukel",
      "Torres del Paine",
    ],
  },
];

// funcion que inserta las opciones de comunas cuando se selecciona una region en el form
const getRegion = (e) => {
  const regionActual = e.value;
  for (num in regiones) {
    if (regionActual === regiones[num].numero) {
      comunaSelect = $("[name=comuna]");
      comunaSelect.empty();
      comunaSelect.append(
        "<option value='def_comuna'>Selecciona una comuna</option"
      );
      regiones[num].comunas.forEach((com) =>
        comunaSelect.append("<option value=" + com + ">" + com + "</option>")
      );
    }
  }
};

// revisa si el formato de email es correcto
const checkEmail = (mail) => {
  const reg =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return mail.match(reg);
};

// revisa si el formato de fecha es correcto
const checkDate = (date) => {
  const dateArray = date.split(" ");
  const day = dateArray[0];
  const hour = dateArray[1];
  const dateRegex = /(\d{4})[-]([1-9]|1[0-2])[-]([012][0-9]|3[01])/;
  const hourRegex = /(0[0-9]|1[0-9]|2[0-3])[:]([0-5][0-9])/;
  return (
    day.match(dateRegex).length !== 0 && hour.match(hourRegex).length !== 0
  );
};

// deja visible los campos de handle de redes sociales
const showSocialNet = (name) => {
  if (name !== "def-network") {
    console.log(document.getElementById(name));
    document.getElementById(name).hidden = false;
  }
};

// agrega un nuevo input de foto al hacer click en "Agregar nueva foto"
const addPhoto = () => {
  let photos = document.getElementsByName("foto-comida");
  if (photos.length < 5) {
    // no permite más de 5 inputs
    const lastPhoto = photos[photos.length - 1];
    const newPhoto = document.createElement("INPUT");
    newPhoto.type = "file";
    newPhoto.name = "foto-comida";
    lastPhoto.parentNode.insertBefore(newPhoto, lastPhoto.nextSibling);
  }
};
const validateForm = () => {
  let errors = [];
  // informacion del lugar
  const region = $("[name='region']")[0];
  const comuna = $("[name='comuna']")[0];

  // informacion del contacto
  const nombre = $("[name='nombre']")[0];
  const email = $("[name='email']")[0];
  const celular = $("[name='celular']")[0];

  // informacion del evento
  const inicio = $("[name='dia-hora-inicio']")[0];
  const termino = $("[name='dia-hora-termino']")[0];
  const tipo_comida = $("[name='tipo-comida']")[0];

  if (email["value"] === "") {
    errors.push(email["name"]);
  } else if (email["value"] !== "" && checkEmail(email["value"]).length === 0) {
    errors.push(email["name"]);
  }

  if (celular["value"] !== "") {
    const reg = /[9]{1}[0-9]{8}/;
    if (celular["value"].match(reg).length === 0) {
      errors.push(celular["name"]);
    }
  }

  if (
    inicio["value"] === "" ||
    (inicio["value"] !== "" && checkDate(inicio["value"]).length === 0)
  ) {
    errors.push(inicio["name"]);
  }

  if (
    termino["value"] === "" ||
    (termino["value"] !== "" && checkDate(termino["value"]).length === 0)
  ) {
    errors.push(termino["name"]);
  }

  if (region["value"] === "def_region") {
    errors.push(region["name"]);
  }
  if (comuna["value"] === "def_comuna") {
    errors.push(comuna["name"]);
  }
  if (tipo_comida["value"] === "def_tipo") {
    errors.push(tipo_comida["name"]);
  }

  return errors;
};

const disableSend = () => {
  if (validateForm().length !== 0) {
    const fields = validateForm().join(", ");
    const msj =
      "Faltan los siguientes campos: " +
      fields +
      "\n" +
      "Así que no se pueden enviar los datos.";
    
    const modalBtn = document.getElementById("sendForm");
    modalBtn.disabled = true;
  }
};

const acceptedForm = () => {
  window.location = "confirmacion.html";
};

const goToHome = () => {
  window.location = "index.html";
};
