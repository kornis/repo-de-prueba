const fs = require('fs');


let archivoTareas = {
    archivo: 'tareas.json',
    leer: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    JSONescribir: function(arrayTareas){

        fs.writeFileSync(this.archivo, JSON.stringify(arrayTareas, null, 2))
    },

    crearTarea: function(nuevoTitulo) {
       const tareas =  this.leer();
       let nuevaTarea = {
           titulo: nuevoTitulo,
           estado: "pendiente"
       }

       tareas.push(nuevaTarea);

       this.escribirJSON(tareas);

    },

    leerPorEstado: function(estado){
        const tareas = this.leer();
        tareas.filter(elemento => elemento.estado == estado)
            .forEach(function(tarea, i){
                console.log(i + '. ' + tarea.titulo + ' - ' + tarea.estado);
            })
    }
}

module.exports = archivoTareas;