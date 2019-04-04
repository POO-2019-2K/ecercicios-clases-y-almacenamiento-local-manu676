import School from "./Employee.js";

export default class Agenda {
  constructor(tableAgenda, tableInfo) {
    this._tableAgenda = tableAgenda;
    this._tableInfo = tableInfo;

    this._numAlumnos = 0;
    this._asistencia = 0;

    this._alumnos= [];
    //this._employees = new Map(); // se guarda como Mapa, no en Vector 
    //localStorage.removeItem("Alumnos");
    this._initTables();
  }

  _initTables() {
    let lsAlumnos = JSON.parse(localStorage.getItem("Alumnos"));
    if (lsAlumnos === null) {
      return;
    }
    lsAlumnos.forEach((e, index) => {
      this._addToTable(new School(e));
    });
  }

  _addToTable(alumnos) {
    let row = this._tableAgenda.insertRow(-1);

    let cellName = row.insertCell(0);
    let cellClave = row.insertCell(1);
    let cellEdit = row.insertCell(2);
    let cellDelete = row.insertCell(3);

    let btnEdit = document.createElement("input");
    btnEdit.type = "button";
    btnEdit.value = "Editar";
    btnEdit.className = "btn btn-sucsess"
    
    let btnDelete = document.createElement("input");
    btnDelete.type = "button";
    btnDelete.value = "Eliminar";
    btnDelete.className = "btn btn-succsess"

    cellName.innerHTML = alumnos.name;
    cellClave.innerHTML = alumnos.clave;
    cellEdit.appendChild(btnEdit);
    cellDelete.appendChild(btnDelete);

    this._numAlumnos++; // this._numAlumnos = this._numAlumnos + 1

    this._tableInfo.rows[0].cells[1].innerHTML = this._numAlumnos;

    let objAlumn = {
      name: alumnos.name,
      clave: alumnos.clave,
    };
    
    this._alumnos.push(objAlumn);
  }

  _findAlumno(clave){//encontrar el correo
    let found = -1 

    this._alumnos.forEach((e, index)=>{
      if(e.clave=== clave)
      {
        found = index;
        return;
      }
    });
    return found;
  }

  addAlumno(alumnos) {
    let found = this._findAlumno(alumnos.clave);

    if (found >= 0){
      swal.fire({
        type: "error",
        title: "error",                 
        text: "La clave ya esta registrado"
      });
      return;
    }
    this._addToTable(alumnos);
    localStorage.setItem("Alumnos", JSON.stringify(this._alumnos));
  }
}