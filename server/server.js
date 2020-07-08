const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(cors());  


app.listen(process.env.port, () =>
 console.log(`Server started at port : ${process.env.port}`));
