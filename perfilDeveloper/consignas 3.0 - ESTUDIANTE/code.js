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
  let datos = {nombre:'',edad:'',ciudad:''};
  datos.nombre = prompt("Ingresa tu nombre");
  datos.edad = 2022 - parseInt(prompt("Ingresa el año en que naciste"));
  datos.ciudad = prompt("Ingresa la ciudad donde vives");
  datos.js = confirm('¿Estas interesado en JavaScript?');
  return datos;
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  let datos = obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let completar = document.getElementById("completar-perfil");
  completar.addEventListener("click", function () {
    document.getElementById("nombre").innerText  = datos.nombre;
    document.getElementById("edad").innerText  = datos.edad;
    document.getElementById("ciudad").innerText  = datos.ciudad;
    let confirm = '';
    datos.js ?  confirm = 'Si' : confirm = 'No';
    document.getElementById("javascript").innerText = confirm;
  })

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  document.getElementById('fila').innerHTML = '';
  


}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let sitio = document.getElementById("cambiar-tema");
  let body = document.body;

  sitio.addEventListener("click", function(){
    let val = body.classList.toggle("dark");
    localStorage.setItem("cambiar-tema", val);
  })

  let valor = localStorage.getItem("cambiar-tema");

  if (valor) {
    body.classList.add("dark")
  } else {
    body.classList.remove("dark")
  } 
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

