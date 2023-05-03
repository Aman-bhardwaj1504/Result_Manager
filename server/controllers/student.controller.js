
const db = require("../models");
const Student = db.student;
const Op = db.Sequelize.Op;
 exports.findOne = (req, res)=>{
     
    const id = req.body.uid;
    const password = req.body.password;
    
    Student.findByPk(id).then(data=>{
        if(data){
            console.log(data.password);
            if(id == data.studentid && password == data.password){
                res.render('studenthome');
            }
        }
        else{
            res.status(404).send({
                message:`cannot find student with id = ${id}`
            });
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"error retrieving student with id = " + id
        });
    });

    

 };


