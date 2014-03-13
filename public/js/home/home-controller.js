//var db = require('/')
//var db = require('../../../models');

angular.module('fadmin', ['ngResource'])
    .controller('HomeController', ['$scope', '$resource', function ($scope, $resource) {
        $scope.playerList = playerList.query(function (response) {
            angular.forEach(response, function (player) {
                $scope.players.push(player);
            });
        });

        $scope.addPlayer = function () {
            var Player = $resource("/player/:playerId");
            var player = new Player({firstName: $scope.firstName, lastName: $scope.lastName});
            player.$save();
        }
    }])
    .factory('playerList', function ($resource) {
        return $resource('/players/');
    });
