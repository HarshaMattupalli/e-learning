const mongoose = require('mongoose');
const url = "mongodb+srv://harsha:harsha123@cluster0.zowkh.mongodb.net/learning?retryWrites=true&w=majority";

var connection = mongoose.connect(url,{ useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
        if (!err) {
            console.log('db connected');
        }
        else {
            console.log('error in  db connection', err);
        }
    })
