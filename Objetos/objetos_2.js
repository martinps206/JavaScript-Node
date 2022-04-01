const prompt = require("prompt-sync")({ sigint: true });

const arrayCuentas = [
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: "$3,253.40",
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: "$3,229.45",
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: "$1,360.19",
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: "$3,627.12",
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: "$1,616.52",
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: "$1,408.68",
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
  ]

let main = () => {
    console.log("\n---------------------------");
    console.log("Ingrese el ejemplo a probar");
    console.log("---------------------------");
    console.log("\n1 -> Obtener un nuevo array de cuentas cuyas edades sean menores a 30.");
    console.log("2 -> Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.");
    console.log("3 -> Obtener un nuevo array de cuentas cuyas edades sean igual a 30.");
    console.log("4 -> Obtener la cuenta con el titular de la misma más joven.");
    console.log("5 -> Obtener un nuevo array con las cuentas habilitadas.");
    console.log("6 -> Obtener un nuevo array con las cuentas deshabilitadas.");
    console.log("7 -> Obtener la cuenta con el menor saldo.");
    console.log("8 -> Obtener la cuenta con el mayor saldo.");
    let opcion = parseInt(prompt("\nIngrese una opcion para verificar: "));
    switch (opcion) {
        case 1: return ejemplo1(arrayCuentas);
            break;
        case 2: return ejemplo2(arrayCuentas);
            break;
        case 3: return ejemplo3(arrayCuentas);
            break;
        case 4: return ejemplo4(arrayCuentas);
            break;
        case 5: return ejemplo5(arrayCuentas);
            break;
        case 6: return ejemplo6(arrayCuentas);
            break;
        case 7: return ejemplo7(arrayCuentas);
            break;
        case 8: return ejemplo8(arrayCuentas);
            break;
        default: return "La opcion elegida no existe."
            break;
    }
    return ""
}  

/* Obtener un nuevo array de cuentas cuyas edades sean menores a 30. */
let ejemplo1 = (arrayCuentas) => {
    let edades = [];
    for (let index = 0; index < arrayCuentas.length; index++) {
        if (arrayCuentas[index].edadTitular < 30) {
            edades.push(arrayCuentas[index]);
        }
    }
    return edades;
}
/* Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30. */
let ejemplo2 = (arrayCuentas) => {
    let edades = [];
    for (let index = 0; index < arrayCuentas.length; index++) {
        if (arrayCuentas[index].edadTitular >= 30) {
            edades.push(arrayCuentas[index]);
        }
    }
    return edades;
}
/* Obtener un nuevo array de cuentas cuyas edades sean igual a 30. */
let ejemplo3 = (arrayCuentas) => {
    let edades = [];
    for (let index = 0; index < arrayCuentas.length; index++) {
        if (arrayCuentas[index].edadTitular === 30) {
            edades.push(arrayCuentas[index]);
        }
    }
    return edades;
}
/* Obtener la cuenta con el titular de la misma más joven. */
let ejemplo4 = (arrayCuentas) => {
    let min = 9999;
    let indexMin = -1;
    for (let index = 0; index < arrayCuentas.length; index++) {
        if (arrayCuentas[index].edadTitular < min) {
            min = arrayCuentas[index].edadTitular;
            indexMin = index;
        }
    }
    return arrayCuentas[indexMin];
}

/* Obtener un nuevo array por cada tipo de cuenta.
Obtener un nuevo array con las cuentas habilitadas.
Obtener un nuevo array con las cuentas deshabilitadas. */

let ejemplo5 = (arrayCuentas) => {
    let habilitada = [];
    for (let index = 0; index < arrayCuentas.length; index++) {
        if (arrayCuentas[index].estaHabilitada === true) {
            habilitada.push(arrayCuentas[index]);
        }
    }
    return habilitada;
}

let ejemplo6 = (arrayCuentas) => {
    let deshabilitada = [];
    for (let index = 0; index < arrayCuentas.length; index++) {
        if (arrayCuentas[index].estaHabilitada === false) {
            deshabilitada.push(arrayCuentas[index]);
        }
    }
    return deshabilitada;
}

/*Obtener la cuenta con el menor saldo.*/
let ejemplo7 = (arrayCuentas) => {
    let min = 9999;
    let indexMin = -1;
    for (let index = 0; index < arrayCuentas.length; index++) {
        let cadena = arrayCuentas[index].saldo.replace("$","");
        let numero = cadena.replace(",","");
        if (parseFloat(numero) < min) {
            min = parseFloat(numero);
            indexMin = index;
        }
    }
    return arrayCuentas[indexMin];
}
/*Obtener la cuenta con el mayor saldo.*/
let ejemplo8 = (arrayCuentas) => {
    let max = 0;
    let indexMax = -1;
    for (let index = 0; index < arrayCuentas.length; index++) {
        let cadena = arrayCuentas[index].saldo.replace("$","");
        let numero = cadena.replace(",","");
        if (parseFloat(numero) > max) {
            max = parseFloat(numero);
            indexMax = index;
        }
    }
    return arrayCuentas[indexMax];
}

console.log(main());