/* Este método se basa en que ninguna clase debe depender de métodos que sea necesarios */

class vehiculo {

    referencia: String;
    marca: String;
    tipo: Number;
    amortiguacion: String;

    constructor() {

        this.get.referencia();
        this.get.marca();
        this.get.tipo();
        this.get.amortiguacion();

    }

}

class automovil extends vehiculo {

    constructor() {

        this.get.referencia();
        this.get.marca();
        this.get.tipo();
        this.get.amortiguacion();

    }

}

class barco extends vehiculo

this.get.referencia();
this.get.marca();
this.get.tipo();
this.get.amortiguacion();
}


/* La clase barco se ve obligada a usar el atributo amortiguación cuando esta no lo usa, 
es un ejemplo de lo que no debe ocurrir. */