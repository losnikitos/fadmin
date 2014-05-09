var db = require('./sequelize'),
    log = require('./log')(module),
    fs = require('fs'),
    uuid = require('node-uuid');
    multiparty = require('multiparty');

exports.query = function (req, res) {
    log.info('Wow, someone asked /players');
    db.Player.findAll().success(function (players) {
        res.send(players)
    });
};

exports.find = function (req, res) {
    var id = req.param("id");

    db.Player.find(id).success(function (player) {
        res.send(player);
    })
};

exports.list = function (req, res) {
    db.Player.findAll().success(function (players) {
        res.send(players);
    })
}

exports.create = function (req, res) {
    var player = { firstName: req.param('firstName'), lastName: req.param('lastName') };

    db.Player.create(player).success(function () {
        res.redirect('/')
    })
};

exports.delete = function (req, res) {
    var id = req.param("id");
    db.Player.find({id: id}).success(function (player) {
        player.destroy().success(function () {
            console.log("DELETED player with id = %d", id);
        })
    })
}

exports.update = function (req, res) {
    var id = req.param("id");
    db.Player.find({id: id}).success(function (player) {
        player.updateAttributes({firstName: req.param("firstName"), lastName: req.param("lastName")}).success(function () {
            player.save().success(function () {
                console.log("UPDATED player with id = %d", id);
                console
            })

        })
    })
}

exports.uploadPicture = function (req, res) {
    var form = new multiparty.Form();
    form.on('file',function(name, file){
        var extension = file.path.match(/\.[0-9a-z]+$/i)[0];
        var serverName = 'images/' + uuid.v1() + extension;

        fs.rename(file.path, serverName);
        res.send(serverName);
    });

    form.parse(req);
}