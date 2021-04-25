
const { response, request } = require('express');

const usuariosGet = (req= request, res = response) => {

    const query = req.query;

    res.json({
        msg: "Get API - Controlador",
        query
    })
};

const usuariosPut = (req, res = response) => {

    const id = req.params.id
    res.json({
        msg: "Put API - Controller",
        id
    })
};

const usuariosPost = (req, res = response) => {
    
    const { nombre } = req.body; 

    res.status(201).json({
        msg: "Post API - Controller",
        nombre
    })
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "Delete API - Controller"
    })
}

module.exports = {
    usuariosGet, 
    usuariosPut,
    usuariosPost,
    usuariosDelete
};