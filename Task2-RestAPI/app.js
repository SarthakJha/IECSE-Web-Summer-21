const express = require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const postsRoute=require('./routes/posts');
const cors=require('cors');
require('dotenv/config');

//Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use('/posts',postsRoute);

//Connecting to MongoDB
mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));


app.listen(3000)