const express = require('express');
const router = express.Router();

//const controlordenes = require('../controllers/proyecto.controller');
const proyectoCtrl = require('../controllers/proyecto.controller');

router.get('/', proyectoCtrl.getOrdenes );
router.post('/', proyectoCtrl.createOrden);
router.get('/:id', proyectoCtrl.getOrden);
router.put('/:id', proyectoCtrl.editOrden);
router.delete('/:id', proyectoCtrl.deleteOrden);

module.exports = router;