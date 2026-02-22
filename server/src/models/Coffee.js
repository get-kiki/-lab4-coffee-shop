module.exports = (sequelize, DataTypes) => {
  const Coffee = sequelize.define('Coffee', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,      // แนะนำใช้ FLOAT
    type: DataTypes.STRING,      // hot / iced / frappe
    image: DataTypes.STRING,
    status: DataTypes.STRING     // available / out of stock
  })

  return Coffee
}
