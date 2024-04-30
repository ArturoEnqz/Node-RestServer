const dbValidators = require("./dbValidators");
const generarJWT = require("./dbValidators");
const subirArchivo = require("./dbValidators");

module.exports = {
    ...dbValidators,
    ...generarJWT,
    ...subirArchivo
}
