const express = require('express');

const app = express();
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const cors = require('cors');
require('dotenv/config');


//middlewares
app.use(cors());
app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);
//routes
app.get('/',(req,res) => {
    res.send('We are on home');
})



//connect to db
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true,
        useUnifiedTopology: true,
    useCreateIndex: true })
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));
    
//server
app.listen(3000);
