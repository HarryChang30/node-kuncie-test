module.exports = (sequelize, DataTypes) => {
  const Inventories = sequelize.define('inventories', {
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false
  });

  Inventories.associate = (models) => {
    models.inventories.belongsTo(models.products, {
      foreignKey: {
        name: 'product_id',
        allowNull: false
      }
    });
  };

  return Inventories;
};