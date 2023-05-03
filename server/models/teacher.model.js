
module.exports= (sequelize,Sequelize)=>{
    const Teacher = sequelize.define("teachers", {
        
       teachersid:{
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
    return Teacher;
};

