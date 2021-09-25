module.exports = (sequelize, DataTypes) => {
  return sequelize.define('carts', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    items: {
      type: DataTypes.JSON
    },
    actual_price: {
      type: DataTypes.DECIMAL(16, 2)
    },
    discount: {
      type: DataTypes.DECIMAL(16, 2)
    },
    final_prices: {
      type: DataTypes.DECIMAL(16, 2)
    }
  });
};