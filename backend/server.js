const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb://localhost:27017/todoDB", {useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('MongoDB database is also connected !!!')
})

const userRouter = require('./routes/user');

app.use('/users', userRouter);









app.listen(port, () =>{
    console.log('Server is running on port: 8000 !!!');
})