'use strict'
const Student=(sequelize, DataTypes)=>sequelize.define('student',{
    studentName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    StudentDep:{
        type:DataTypes.STRING,
        

    }
})

module.exports = Student;
