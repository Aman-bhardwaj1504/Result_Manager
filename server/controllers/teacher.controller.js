const db = require("../models");
const Teacher = db.teacher;
const Studentresult = db.studentresults;
const Op = db.Sequelize.Op;
 exports.findAllRecords = (req, res)=>{
     
    const id = req.body.uid;
    const password = req.body.password;

    
    Teacher.findByPk(id).then(data=>{
        if(data){
         
            if(id == data.teachersid && password == data.password){
                Studentresult.findAll()
                .then(datavalue=>{
                    console.log(datavalue);
                    res.render('teacherhome', {datavalues:datavalue , datalength:datavalue.length});
                }).catch(err=>{
                    res.status(500).send({
                        message: 
                        err.message || "Some error occurred while fetching all results"
                    })
                })
               
            }
        }
        else{
            res.status(404).send({
                message:`cannot find teacher with id = ${id}`
            });
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"error retrieving teacher with id = " + id
        });
    });

    

 };


