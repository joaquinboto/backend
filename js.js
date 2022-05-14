
    
//Consigna: Implementar programa que contenga una clase llamada Contenedor 
// que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:

// save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
// getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
// getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
// deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
// deleteAll(): void - Elimina todos los objetos presentes en el archivo.

const fs = require('fs');

const objeto = {
    title: 'Remera',
    price: 150,
    id: 0
}



class Contenedor {

    save(objeto) {

       let json = fs.readFileSync('data.txt' , 'utf-8') // lee el archivo
        let array = JSON.parse(json) // convierte el archivo en un array con los objetos
        array.push(objeto) // agrega el objeto al array
        let id = array.length // obtiene el id del objeto que se agrega
        objeto.id = id // le asigna el id al objeto que se agrega
        let jsonString = fs.writeFileSync('data.json', JSON.stringify(array)) // escribe el array en el archivo
        return id
    }
 

    getById(id) {
        let json = fs.readFileSync('data.json' , 'utf-8') // lee el archivo
        let array = JSON.parse(json) // convierte el archivo en un array con los objetos
        let obj = array.find(function(element) {
            // busca el objeto con el id que se pasa por parámetro
            if (element.id == id) {
                return element
            } else {
                return null 
            }
        })
        return obj // devuelve el objeto si lo encuentra , sino devuelve null
    }

    getAll() {
        let json = fs.readFileSync('data.json' , 'utf-8') // lee el archivo
        let array = JSON.parse(json) // convierte el archivo en un array con los objetos
        console.log(array) // muestra el array con todos los objetos
        return array
    }

    deleteById(id) {
        let json = fs.readFileSync('data.json' , 'utf-8') // lee el archivo
        let array = JSON.parse(json) // convierte el archivo en un array con los objetos
        let index = array.findIndex(function(element) {
            return element.id == id // busca el objeto con el id que se pasa por parámetro
        })
        array.splice(index, 1) // elimina el objeto del array con el id que se pasa por parámetro
        let jsonString = fs.writeFileSync('data.json', JSON.stringify(array))
    }

    deleteAll() {
        let json = fs.readFileSync('data.json' , 'utf-8') // lee el archivo
        let array = JSON.parse(json) // convierte el archivo en un array con los objetos
        array.splice(0, array.length) // elimina todos los objetos del array
        let jsonString = fs.writeFileSync('data.json', JSON.stringify(array))
    }
}

const contenedor = new Contenedor()


contenedor.save(objeto)
contenedor.getById(1)
contenedor.getAll()
// contenedor.deleteById(1) // elimina el objeto con el id 1
// contenedor.deleteAll() // elimina todos los objetos









