const db = require("../models");
const Studentresult = db.studentresults;
const Op = db.Sequelize.Op;

exports.delete = (req, res) => {
    const rollno = req.params.rollno;
    Studentresult.destroy({
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
      } else {
        res.send({
          message: `Cannot delete data with rollno=${rollno}. Maybe data was not found!`});}}).catch(err => {
      res.status(500).send({
        message: "Could not delete data with rollno=" + rollno
      });});};

