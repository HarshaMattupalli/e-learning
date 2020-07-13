const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('./models/db');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const admin =require('./routes/admin');

app.use('/admin',admin);

app.get('/',(req,res)=>{
    res.send('hi')
})
app.listen(3000, () => {
    console.log(`Server is running on port: 3000`);
});
