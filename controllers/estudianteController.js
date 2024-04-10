const Estudiante = require('../models/Estudiante');
exports.crear = async (req, res) => {

    try {
        let estudiante;

        //guardamos nuestro comentario
        estudiante = new Estudiante(req.body);
        await estudiante.save();
        res.send(estudiante);

    } catch (error) {
        console.log(error);
        res.status(500).send('Error al guardar estudiante');
    }
}

exports.obtener = async (req, res) => {
     try {
        const estudiantes = await Estudiante.find();
        res.json(estudiantes);

     } catch (error) {
         console.log(error);
         res.status(500).send('error al obtener los estudiantes');
     }
}

exports.eliminar = async (req, res) => {
    
    try {

        let estudiante = await Estudiante.findById(req.params.id);

        if( !estudiante ) {
            res.status(404).json( { msg: 'No existe el estudiante'});
        }
        await Estudiante.findOneAndRemove({ _id: req.params.id});
        res.json( { mensaje: 'Estudiante eliminado correctamente'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('error al eliminar el estudiante');
    }
}