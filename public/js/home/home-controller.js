var module = angular.module('fadmin');

module.factory('Player', function ($resource) {
    return $resource("/players/:id");
});

module.controller('playerController', function ($scope, Player) {

    $scope.players = Player.query();

    $scope.addPlayer = function () {
        var dataObject = {firstName: $scope.firstName, lastName: $scope.lastName};
        var player = new Player(dataObject);
        player.$save();
    }
});
