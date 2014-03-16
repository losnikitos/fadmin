var Sequelize = require('sequelize'),
    log = require('./log')(module);

var sequelize = new Sequelize('formations', 'root', 'root')
log.info('Connected to DB');

var Player = sequelize.define('Player', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
});

sequelize.sync({force: true});

exports.Player = Player;