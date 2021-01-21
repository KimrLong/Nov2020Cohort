'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.blogs.belongsTo({foreignKey: 'id'})
    }
  };
  blog.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    body: DataTypes.STRING,
    userID: DataTypes.INTEGER,
    isPublished: DataTypes.BOOLEAN,
    publishDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'blog',
  });
  return blog;
};