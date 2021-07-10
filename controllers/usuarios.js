const { response,request } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');

const UsuariosGet = async(req=request, res=response)=> {
    /* const params = req.query; *///aca obtenemos queryparams ?q=10&w=12
    const {limite=5,desde=0} = req.query;
    const queryUserTrue = {estado:true};

    const [total,usuarios] = await Promise.all([
      Usuario.countDocuments(queryUserTrue),
      Usuario.find(queryUserTrue)
    .skip(Number(desde))
    .limit(Number(limite))
    ]);

    res.json({total,usuarios})
  };

const UsuariosPut = async(req, res)=> {
    const {id} = req.params;//Se obtiene mediante argumentos de segmentacion /:id
    const {_id,password, google , ...resto} = req.body;
    if(password)
    {
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password,salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id,resto);

    res.json({usuario})
  };

const UsuariosPost = async(req, res)=> {
    const {nombre,correo,password,rol} = req.body;//Se obtiene mediente el body
    const  usuario = new Usuario({nombre,correo,password,rol});

    //encriptar la contrasena 
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password,salt);
    await usuario.save();

    res.json({usuario})
  };

const UsuariosDelete = async(req, res)=> {
  const {id} = req.params;
  //Borrando fisicamente
  /* const usuario = await Usuario.findByIdAndDelete(id); */

  const usuario = await Usuario.findByIdAndUpdate(id,{estado:false});

    res.json({usuario})
  };

module.exports = {UsuariosGet,UsuariosPut,UsuariosPost,UsuariosDelete}