const {response}=require('express')

const usuariosGet=(req,res=response)=>{
    
    res.json({
        msg:'get API -controlador'
    });
}
const usuariosPost=(req,res=response)=>{
    const body=req.body;
    const {usuario, edad}=body
    res.json({
        msg:'Post API -controlador',
        usuario,
        edad
    });
}
const usuariosPatch=(req,res=response)=>{
    
    res.json({
        msg:'Patch API -controlador'
    });
}
const usuariosDelete=(req,res=response)=>{
    
    res.json({
        msg:'Delete API -controlador'
    });
}
const usuariosPut=(req,res=response)=>{
    const {id}=req.params
    const {nombre='no name',apikey=null}=req.query

    res.json({
        msg:'Put API -controlador',
        id,
        nombre,
        apikey
    });
}


module.exports={
    usuariosGet,
    usuariosDelete,
    usuariosPatch,
    usuariosPut,
    usuariosPost
}