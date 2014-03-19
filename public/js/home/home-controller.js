var module = angular.module('fadmin');

module.factory('Player', function ($resource) {
    return $resource("/players/:id");
});


module.controller('PlayerController', function ($scope, $modal, Player) {
    $scope.players = Player.query();

    $scope.addPlayer = function () {
        var dataObject = { firstName: $scope.firstName, lastName: $scope.lastName };
        var player = new Player(dataObject);
        player.$save();
    }

    $scope.openDetails = function () {
        $modal.open({
            templateUrl: 'views/details.html',
            controller: 'PlayerDetails',
            scope: this
        });
    }
});

module.controller('PlayerDetails', function ($scope, $modalInstance) {
    console.log($scope.player.firstName)
})