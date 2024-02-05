

const express = require('express');
const pessoas = require('./pessoasRoute');
const categorias = require('./categoriasRoute');
const cursos = require('./cursosRoute');

module.exports = app=>{
  app.use(
    express.json(),
    pessoas,
    categorias,
    cursos
  );
app.get('/',(req,res)=> {return res.send("Bem vindo")})

};