//const express = require('express');
import express from 'express';

const app = express();
const port = 3333;

app.get('/', (req, res) => res.send('Vamos adotar um gato?!?!'));

app.listen(port, () => {
    console.log(`Servidor inicializado em http://localhost:${port}`)
});