module.exports = (sequelize, DataTypes) => {
  return sequelize.define('inventories', {
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
};