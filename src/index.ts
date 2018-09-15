class HolaPerro{

    nombre:string;
    apellido:string;

    constructor(private name:string, private lastname:string){
        this.nombre = name;
        this.apellido = lastname;
    }
}

interface Person{
    nombre:string,
    apellido:string
}

function get(person:Person){
    return "Hola, "+ person.nombre + person.apellido;
}

let Saludo = new HolaPerro("Jose", "Altamar");



document.body.innerHTML = get(Saludo);
