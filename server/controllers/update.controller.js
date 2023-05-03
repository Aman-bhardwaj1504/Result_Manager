const db = require("../models");
const Studentresult = db.studentresults;
const Op = db.Sequelize.Op;

exports.updateresults = (req, res) => {
    const rollno = req.body.rollno;
    console.log(req.body);
    Studentresult.update(req.body, {
    where: { rollno: rollno }}).then(num => {if (num == 1) {
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
      });
    }
