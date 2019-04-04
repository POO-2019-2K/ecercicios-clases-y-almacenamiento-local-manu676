import Movimiento from "./Transaccion.js"
import Registro from "./Agenda.js"

class Main{
    constructor(){
    let agenda = new Registro(
    document.querySelector("#agenda"), 
    document.querySelector("#info"));
    document.querySelector("#btnAdd").addEventListener("click", () => {

        let form = document.querySelector("#form");

        if (form.checkValidity() === true) {

        let name = document.querySelector("#name").value;
        let cuenta = document.querySelector("#cuenta").value;
        let tipoMovimiento = document.querySelector("#select").value;
        let cantidad = document.querySelector("#cantidad").value;
        
        let objBanco = {
            name: name,
            cuenta: cuenta,
            tipoMovimiento: tipoMovimiento,
            cantidad: cantidad,
        };
        let c = new Movimiento(objBanco);
        agenda.addMovimiento(c)
        ;}
    form.classList.add("was-validated");
    });
    }   
}

let m = new Main();