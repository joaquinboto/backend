class Usuario {
    constructor (nombre, apellido , mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }


    getFullName () {

        return `Mi nombre es: ${this.nombre} , apellido: ${this.apellido}`
    }

    addMascotas(nameMascota) {
        
        this.mascotas.push(nameMascota)
        console.log("array de animales" , this.mascotas)
    }

    countMascotas() {
        
        return `${this.nombre} tiene ${this.mascotas.length} ${this.mascotas[0]}`
    }

    addBook(libro){
        console.log("array de libros" , this.libros)
        return this.libros.push(libro)
    }

    getBookNames() {
        
        this.libros = this.libros.map(libro => {
            console.log(`En mi libreria tengo el libro ${libro.nombre}`)
        })
    }
}

let user = new Usuario('Juan', 'Perez')
const libro = {nombre: 'El señor de los anillos', 
                autor: 'J.R.R. Tolkien'
            }


console.log(user.getFullName())
user.addMascotas('Perro')
console.log(user.countMascotas())
user.addBook(libro)
user.getBookNames()




