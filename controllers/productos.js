const { response,request } = require('express');

const postProductos = (req=request,res=response)=>
{
    const arg = req.body;
    res.json({...arg});
}

const putProductos = (req,res)=>
{
    const id = req.params.id;
    res.json({id});
}

const getProducts = (req,res)=>
{
    const params = req.query;
    res.json({...params});
}

module.exports = {postProductos,putProductos,getProducts}