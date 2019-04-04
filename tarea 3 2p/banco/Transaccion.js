export default class Movimiento{
    constructor(movimiento){
        this._name = movimiento.name;
        this._cuenta= movimiento.cuenta;
        this._tipoMovimiento = movimiento.tipoMovimiento;
        this._cantidad = movimiento.cantidad;
    }
    get name(){
        return this._name;
    }
    get cuenta(){
        return this._cuenta;
    }
    get cantidad(){
        return this._cantidad;
    }
    get tipoMovimiento(){
        return this._tipoMovimiento;
    }
    getDeposito(){
        this._saldo =Number(this._saldo.value + this._cantidad.value);
        return this._saldo;
    }
    getRetiro(){
        this._saldo =Number(this._saldo.value - this._cantidad.value);
        return this._saldo;
    }
}