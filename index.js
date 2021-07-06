const express = require (' express');
const { request, response } = require('express');
const getProducts = require('./getProducts');


const app = express();

const port = 5050;

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProduct)

app.listen( port, () => {
    console.log(`server listening to port: ${port}`)
});

