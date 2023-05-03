const express = require('express');
const router = express.Router();

const students = require("../controllers/student.controller");
const studentrecord = require("../controllers/studentrecord.controller");
const teachers = require("../controllers/teacher.controller");

const editresult = require("../controllers/editresult.controller");
const updateresult = require("../controllers/update.controller");

const deleteresult = require("../controllers/deleteresult.controller");

const addresult = require("../controllers/addresult.controller");
    

router.post("/login", students.findOne);

router.post("/studentview", studentrecord.findOne);

router.post("/teachlogin", teachers.findAllRecords);

router.post("/edit", editresult.edit);

router.post('/updateresult',updateresult.updateresults);

router.post("/delete/:rollno", deleteresult.delete);

router.post("/adddata", addresult.create);

module.exports = router;