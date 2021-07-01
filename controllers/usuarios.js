const { response,request } = require('express');

const UsuariosGet = (req=request, res=response)=> {
    const params = req.query;//aca obtenemos queryparams ?q=10&w=12
    res.json({msg:'get Hello World - controller',params})
  };

const UsuariosPut = (req, res)=> {
    const id = req.params;//Se obtiene mediante argumentos de segmentacion /:id
    res.json({msg:'put Hello World - controller',id})
  };

const UsuariosPost = (req, res)=> {
    const body = req.body;//Se obtiene mediente el body

    res.json({msg:'post Hello World - controller',body})
  };

const UsuariosDelete = (req, res)=> {
    res.json({msg:'delete Hello World - controller'})
  };

module.exports = {UsuariosGet,UsuariosPut,UsuariosPost,UsuariosDelete}