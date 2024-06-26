const { Router } = require('express');
const {cargarArchivo, actualizarImagen} = require("../controllers/uploads");
const {check} = require("express-validator");
const {validarCampos} = require("../middlewares/validar-campos");

const router = new Router();

router.post( '/', cargarArchivo );
router.put( '/:coleccion/:id', [
    check('id', 'El id debe ser de mongo').isMongoId(),
    check('coleccion').custom( c => coleccionesPermitidas( c, ['usuarios', 'productos'] )),
    validarCampos
], actualizarImagen);

module.exports = router;