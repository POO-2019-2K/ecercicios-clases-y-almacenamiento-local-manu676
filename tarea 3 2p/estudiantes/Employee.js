export default class School {
  constructor(alumnos) {
    this._name = alumnos.name.toUpperCase();
    this._clave = alumnos.clave;
  }

  get name() {
    return this._name;
  }

  get clave() {
    return this._clave;
  }
}
