module.exports = (sequelize, DataTypes) => {
  return sequelize.define('inventories', {
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    qty: {
      type: DataTypes.Integer,
      allowNull: false
    }
  }, {
    timestamps: false
  });
};