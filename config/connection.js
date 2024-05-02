const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://firas:firas1234@cluster0.facll5f.mongodb.net/vrt?retryWrites=true&w=majority&appName=Cluster0");

const conn = mongoose.connection;
conn.once('open', () => {
    console.log("connected");
})
conn.on('error', () => {
    console.log("error ");
})

module.exports = conn;