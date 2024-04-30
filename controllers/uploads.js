const { response } = require("express");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const {subirArchivo} = require("../helpers/subir-archivo");

const cargarArchivo = async (req, res = response) => {
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) {
        res.status(400).json("No hay archivos que subir");
    }

    try {
        // txt, md
        // const nombre = await subirArchivo( req.files, ['txt', 'md'], 'textos' );
        const nombre = await subirArchivo( req.files, undefined, 'imgs' );
        res.json({ nombre });
    }
    catch (msg) {
        res.status(400).json({ msg });
    }
}

const actualizarImagen = async (req, res = response) => {
    const { id, coleccion } = req.params;

    res.json({ id, coleccion });
}

module.exports = {
    cargarArchivo,
    actualizarImagen
}