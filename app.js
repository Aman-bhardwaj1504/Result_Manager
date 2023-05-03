const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const db = require("./server/models");

db.sequelize.sync();

db.sequelize.sync({force:false}).then(()=>{
    console.log("drop & resync db");
});

const cors = require("cors");

const app = express();
var corsOptions = {origin:"http://localhost:8081"};

app.use(cors(corsOptions));
app.use(express.json());

const bodyParser = require('body-parser');

dotenv.config({ path:'config.env'});




app.use(express.urlencoded({extended: true}));


app.set("view engine","ejs");


app.use('/css', express.static(path.resolve(__dirname,"assets/css")));



app.get('/', (req, res)=>{
    res.render("front");
    
});

app.get('/studentlogin', (req,res)=>{
    res.render("studentlogin");
})

app.get('/teacherlogin', (req,res)=>{
    res.render("teacherlogin");
})

app.get('/add', (req,res)=>{
    res.render("addrecord");
})

app.get('/logout', (req,res)=>{
    res.render("front");
})



const studentRoutes = require('./server/routes/student.route');


app.use('/', studentRoutes);




// require("./server/routes/student.route")(app);

const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log(`listening on port ${port}`));


 