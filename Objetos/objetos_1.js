/* DADO EL SIGUIENTE ARREGLO */
let profesionales = [
    {
        nombre: "juancito",
        profesion: "programador"
    },
    {
        nombre: "maria",
        profesion: "comerciante"
    },
    {
        nombre: "pepito",
        profesion: "docente"
    }
]

/* crear una funcion para que le agregue un metodo a cada objeto
lo que debe hacer el metodo es retornar un string con el nombre y su profesion
por ejemplo , " mi nombre es juancito y soy programador" */
profesionales.agregarMetodoToString = function(profesionales){
    for (let index = 0; index < profesionales.length; index++) {
        profesionales[index] = Object.assign(profesionales[index], {toString: function() {return "Mi nombre es " + profesionales[index].nombre + " y soy " + profesionales[index].profesion}});
    }
    return profesionales;
}

profesionales.agregarEdad = function(){
    for (let index = 0; index < profesionales.length; index++) {
        profesionales[index] = Object.assign(profesionales[index], {edad: 41 + index});
    }
}

/* LUEGO NOS DIMOS CUENTA QUE NO LE AGREGAMOS LA EDAD A NINGUNA PERSONA
DEMOS CREAR OTRA FUNCION QUE LE AGREGUE ESA PROPIEDAD A TODOS LOS OBJETOS
DATO DE COLOR (LA EDAD DE LAS PERSONAS ES UN AÑO MAS CADA UNA Y LA MAS JOVEN TIENE 41) */
function main() {
    profesionales.agregarMetodoToString(profesionales);
    for (let index = 0; index < profesionales.length; index++) {
        console.log(profesionales[index].toString());
    }
    return "";
}

profesionales.agregarEdad(profesionales);
console.table(profesionales);
console.log(main());