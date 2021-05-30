const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
// const Router = express.Router();
var routes = require('./routes/index.routes.js')

// const routes = require('./routes/index.routes');

mongoose.connect('mongodb://localhost:27017/CrudApp',{ useUnifiedTopology: true ,useNewUrlParser: true})
;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({extended:true}))

app.use('/',routes)

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Port connected on ${port}`)
})
