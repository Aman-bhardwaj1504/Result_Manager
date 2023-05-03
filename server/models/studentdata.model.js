
module.exports= (sequelize,Sequelize)=>{
    const Studentresult = sequelize.define("studentresults", {
        
       rollno:{
           type: Sequelize.STRING,
           allowNull:false,
           primaryKey:true
       },
       name:{
           type: Sequelize.STRING,
           allowNull:false,
       },
       dateofbirth:{
        type: Sequelize.STRING,
        allowNull:false,
       },
       score:{
        type: Sequelize.INTEGER,
        allowNull:false,
    }

       
       

    },
    
    {timestamps : false
    });
    return Studentresult;
};
