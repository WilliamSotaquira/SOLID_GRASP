/* Este método nos da instrucción de que los módulos de alto nivel no pueden depender 
de los mas bajo nivel, lo correcto es que ambos dependan  de abstracciones */

class Repository {

    function getData() {
        let data = SQLite.query('Select * form data');
        return data;
    }

}

class Controller {
    let data = Repository.getData();
    doSomething(data);

}

// En este ejemplo nos permite hacer el cambio conexión a bases de datos sin depender mas allá de la capa abstracta.


class Repository {

    function getData() {
        let data = MongoDB.find({});
        return data;
    }

}

class Controller {
    let data = Repository.getData();
    doSomething(data);

}