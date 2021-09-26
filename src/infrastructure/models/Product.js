module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('products', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
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
  }, {
    timestamps: false
  });

  Products.associate = (models) => {
    models.products.hasOne(models.inventories, {
      foreignKey: {
        name: 'product_id',
        allowNull: false
      }
    });
  };

  return Products;
};