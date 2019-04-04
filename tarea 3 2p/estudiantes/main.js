import Agenda from "./Agenda.js";
import School from "./Employee.js";

class Main {
  constructor() {
    let agenda = new Agenda(
      document.querySelector("#agenda"),
      document.querySelector("#info")
    );

    document.querySelector("#btnAdd").addEventListener("click", () => {
      let form = document.querySelector("#form");

      if (form.checkValidity() === true) {
        let name = document.querySelector("#name").value;
        let clave = document.querySelector("#number").value;

        let objAlumn = {
          name: name,
          clave: clave,
        };

        let a = new School(objAlumn);

        agenda.addAlumno(a);
      }

      form.classList.add("was-validated");
    });
  }
}

let m = new Main();
