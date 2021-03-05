const express = require('express');
const cors = require('cors');
const routes = require('./routes');

app.use(cors());
const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333);