const mongoose = require('mongoose');
require('dotenv').config();

var connection = mongoose.connect(process.env.MONGOURL, { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
        if (!err) {
            console.log('db connected');
        }
        else {
            console.log('error in  db connection', err);
        }
    })
