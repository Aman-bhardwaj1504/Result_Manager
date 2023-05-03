
module.exports= (sequelize,Sequelize)=>{
    const Student = sequelize.define("student", {
        
       studentid:{
           type: Sequelize.STRING,
           allowNull:false,
           primaryKey:true
       },
       password:{
           type: Sequelize.STRING,
           allowNull:false,
       }

    },
    
    {timestamps : false
    });
    return Student;
};

