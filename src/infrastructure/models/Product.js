module.exports = (sequelize, DataTypes) => {
  return sequelize.define('products', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
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
  });
};