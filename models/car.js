function initCarModel(sequelize, DataTypes) {
  return sequelize.define(
    'car',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      rate: {
        type: DataTypes.DECIMAL(10, 2),
      },
      model: {
        type: DataTypes.STRING,
      },
      manufacturer: {
        type: DataTypes.STRING,
      },
      seats: {
        type: DataTypes.INTEGER,
      },
      manual: {
        type: DataTypes.BOOLEAN,
      },
      vrm: {
        type: DataTypes.STRING,
      },
      fuel: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      underscored: true,
    },
  );
}

module.exports = initCarModel;
