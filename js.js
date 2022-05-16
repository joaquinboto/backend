
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









