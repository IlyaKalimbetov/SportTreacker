

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Motivation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {foreignKey: 'userId'});
    }
  }
  Motivation.init({
    name: DataTypes.STRING,
    time: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    sex: DataTypes.STRING,
    intensive: DataTypes.STRING,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Motivation',
  });
  return Motivation;
};