const POSTGRES_URI = 'postgres://postgres@localhost:5432/postgres';
const { Sequelize, DataTypes } = require('sequelize');

const food = require('./food');
const clothes=require('./clothes')

const collection=require('./collection')
var sequelize = new Sequelize(POSTGRES_URI, {});
const  foodmodel=food(sequelize,DataTypes)
const clothesModel=clothes(sequelize,DataTypes)

 const foodCollection=new collection(foodmodel)
 const clothescollection=new collection(clothesModel)


module.exports = {
    db: sequelize,
    foodmodel,
    foodCollection :foodCollection,
    clothescollection:clothescollection

}
