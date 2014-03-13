module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Player', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING
    })
}