const express = require('express');
const router = express.Router();

const estudianteController = require('../controllers/estudianteController');

router.post('/', estudianteController.crear);
router.get('/', estudianteController.obtener);
router.delete('/:id', estudianteController.eliminar);

module.exports = router;