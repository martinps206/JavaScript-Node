/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.name = prompt("Ingrese su nombre");
  datosPersona.year = 2022 - parseInt(prompt("Ingresa el año en que nació"));
  datosPersona.city = prompt("Ingresa la ciudad en la que vives");
  datosPersona.confirmJs = confirm('¿Estas interesado en el curso de JavaScript?');
  
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
    document.getElementById("nombre").innerText  = datosPersona.name;
    document.getElementById("edad").innerText  = datosPersona.year;
    document.getElementById("ciudad").innerText  = datosPersona.city;
    let auxConfirm = '';
    datosPersona.confirmJs ?  auxConfirm = 'Si' : auxConfirm = 'No';
    document.getElementById("javascript").innerText = auxConfirm;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  document.getElementById('fila').innerHTML = '';
  listado.forEach((course) => {
    document.getElementById('fila').innerHTML += `<div class="caja">
            <img src="${course.imgUrl}" alt="${course.lenguajes}"></img>
            <p class="lenguajes">lenguajes:${course.lenguajes}</p>
            <p class="bimestre">bimestre: ${course.bimestre}</p>
            </div>`;

  });
  
  
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  document.getElementById("sitio").classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener("keydown", (event) => {
    if (event.key === "f" || event.key === "F") {
      document.getElementById("sobre-mi").classList.remove("oculto");
    }
});
