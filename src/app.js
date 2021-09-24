const express = require('express');

const app = express();

app.get('/', (req, res) => res.status(200).json({ msg: 'Server is healthy' }));

module.exports = app;