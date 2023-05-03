const db = require("../models");
const Studentresult = db.studentresults;



const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.rollno) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
}
    console.log(req.body.rollno);
    const studentresult = {
    rollno: req.body.rollno,
    name: req.body.name,
    dateofbirth: req.body.dateofbirth,
    score: req.body.score
    };
    // Save Tutorial in the database
    Studentresult.create(studentresult)
    .then(data => {
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
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
        });
    });
};