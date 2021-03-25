// Las entidades u objetos deben estar abiertos para la lectura, pero cerrados para la modificación.

class verificarVehiculos {


    vehiculos = ["FORD", "VOLKSWAGEN", "RENAULT"];

    verificarAceleracion(nuevo_vehiculo) {

        switch (this.vehiculos.values(aceleracion)) {

            case 1, 2, 3, 4, 5:
                console.log('El vehiculo es de alto rendimiento deportivo');
                break;
            default:
                console.log('El coche es de rendimiento domestico');
                break;
        }

    }
    agregarVehiculo(nuevo_vehiculo) {

        this.vehiculos.push(vehiculos);

    }

    var verificacion = new verificarVehiculos();
    verificacion.agregarVehiculo('MERCEDES BENZ');


}
/* Pese a que el código esta contenido en una clase Padre, al momento de agregar un vehículo 
al arreglo no afectara el objetivo del codigo inicial.  */