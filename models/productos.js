/*****
 * Creacion de la tabla productos desde el ORM sequelize 
 * Se retrona para ser inplementado en el archivo dbconfig.js 
 * Se genera un archivo por cada tabla 
 */

module.exports = (sequelize, type)=>{ // Esta es una funcion sin nombre que esta siento exportado y recibe 2 parametros

    return sequelize.define('producto',{ // Los nombres de los campos deben ser en singular NO EN PLURAL
        productoId:{                    // Campo de la tabla producto 
            type: type.INTEGER,         // Tipo de datos 
            primaryKey: true,
            autoIncrement: true
        },
        producto: type.STRING,
        precio: type.DOUBLE(5, 2),
        desc: type.STRING,
        estado: type.ENUM('1', '2'),
        imagen: type.STRING
    },{ timestamps: false });
};

// ESTE ARCHIVO SE PUEDE TOMAR DE EJEMPLO SOLO CAMBIAR EL NOMBRE DE LA TABLA Y LOS CAMPOS
