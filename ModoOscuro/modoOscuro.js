let evaluar = confirm("desea cambiar a modo oscuro");



function cambiarModo(evaluar){
    if(evaluar){
        document.querySelector("body").classList.toggle("bodyOscuro");

        for (let i = 0; i < 6; i++){
            document.getElementsByClassName("item")[i].classList.toggle('item-oscuro');
            document.querySelectorAll('h2')[i].classList.add('title-oscuro');
            document.querySelectorAll('p')[i].classList.add('textos-oscuro');
        }
    }
}

//document.getElementsByClassName
cambiarModo(evaluar);