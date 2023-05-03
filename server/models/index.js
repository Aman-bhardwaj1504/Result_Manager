const dbConfig = require("../../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host, dialect: 'mysql', operatorsAliases: false, 
    
}
    );

    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.student = require("../models/student.model")(sequelize,Sequelize);
    db.studentresults = require("../models/studentdata.model")(sequelize,Sequelize);
    db.teacher = require("../models/teacher.model")(sequelize,Sequelize);

    module.exports = db;
   

    