const express = require('express');

const app = express();
const users = [];

app.get('/',(req, res) => {
        res.send("Hello World!");
        });

app.listen(3000 () => {
console.log('Server is listening on Port 3000');
});