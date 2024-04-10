const mongoose = require('mongoose');

const EstudianteSchema = mongoose.Schema( {
    nombre: {
       type: String,
       required: false
    },
    asignatura: {
       type: String,
       required: false
    }
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);