// Hacer una cosa, hacerla bien. Es te principio lo que busca es que el la función o la clase solo debe tener una instrucción

class vehículo {

    consumo() {
        // Lógica para indicarnos la consumo
    }
    aceleracion() {
        // Lógica para indicarnos el aceleracion
    }

}
class sedan extends vehículo {

    consumo() {
        // Lógica para indicarnos la consumo en el tipo Sedán 
    }
    aceleracion() {
        // Lógica para indicarnos el aceleracion en el tipo Sedán 
    }
}

class deportivo extends vehículo {

    consumo() {
        // Lógica para indicarnos la consumo en el tipo deportivo 
    }
    aceleracion() {
        // Lógica para indicarnos el aceleracion en el tipo deportivo 
    }
}

/* Lo que se busca con este método es hacer extension de las clases para que 
cuando sea el momento de hacer modificación es sea seguro porque no tenemos 
toda la lógica en una sola clase. */