module.exports = (sequelize, DataTypes) => {
  return sequelize.define('products', {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(16, 2),
      allowNull: false
    },
    sku_code: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  });
};