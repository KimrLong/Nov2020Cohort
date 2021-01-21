'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      author.hasMany(model.blog)
    }
  };
  author.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    bio: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    email: DataTypes.STRING,
    twitterTag: DataTypes.STRING,
    linkedIn: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'author',
  });
  return author;
};