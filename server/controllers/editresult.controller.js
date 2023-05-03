const db = require("../models");
const Studentresult = db.studentresults;
const Op = db.Sequelize.Op;
 exports.edit = (req, res)=>{

    const rollno = req.body.rollno;
    
    Studentresult.findByPk(rollno).then(data=>{
        if(data){
           
            if(rollno == data.rollno){
                res.render('editresult' , {Data:data});
            }
            // res.send(data);
        }
        else{
            res.status(404).send({
                message:`cannot find student with id = ${rollno}`
            });
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"error retrieving student with id = " + rollno
        });
    });

    

 };


