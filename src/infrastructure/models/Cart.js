module.exports = (sequelize, DataTypes) => {
  return sequelize.define('carts', {
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    items: {
      type: DataTypes.JSON
    },
    actual_prices: {
      type: DataTypes.DECIMAL(16, 2)
    },
    discount: {
      type: DataTypes.DECIMAL(16, 2)
    },
    final_prices: {
      type: DataTypes.DECIMAL(16, 2)
    },
    is_checkout: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: false
  });
};