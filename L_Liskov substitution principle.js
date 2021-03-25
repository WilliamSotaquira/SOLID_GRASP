/* Este principio indica que una subclase puede ser sustituida por su clase principal, 
si el momento de hacer prueba esta falla por consiguiente se estará violando este principio */

class vehiculos {

    llantas(cant) {
        console.log("Poseé en total: ".cant);
    }
}

class camion extends vehiculos {

    llantas(cant) {
        console.log("Este vehículo de transmisión doble posee en total: ".cant);
    }
}

// Error
class barco extends vehiculos {

    llantas(cant) {
        console.error("Este vehiculo no poseé llantas: ");
    }
    Asientos() {

    }

}

/* 
 * La clase barco infringe este método debido a que los argumentos devueltos no son los mismos en cantidad.
 * El argumento llantas devuelto por la clase no es el mismo que el solicitado. 
 */