var db = require('../models');

exports.list = function (req, res) {
    global.Player.findAll().success(function (players) {
        res.send(players)
    });
};

exports.find = function (req, res) {
    var id = req.param("id");

    global.Player.find(id).success(function (player) {
        res.send(JSON.stringify(player));
    })
};

exports.list = function (req, res) {
    global.Player.findAll().success(function (players) {
        res.send(JSON.stringify(players));
    })
}

exports.create = function (req, res) {
    var player = { firstName: req.param('firstName'), lastName: req.param('lastName') };

    global.Player.create(player).success(function () {
        res.redirect('/')
    })
};

exports.delete = function (req, res) {
    var id = req.param("id");
    global.Player.find({id: id}).success(function (player) {
        player.destroy().success(function () {
            console.log("DELETED player with id = %d", id);
        })
    })
}

exports.update = function (req, res) {
    var id = req.param("id");
    global.Player.find({id: id}).success(function (player) {
        player.updateAttributes({firstName: req.param("firstName"), lastName: req.param("lastName")}).success(function () {
            player.save().success(function() {
                console.log("UPDATED player with id = %d", id);
            })

        })
    })
}