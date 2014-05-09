app.controller('PlayerListController', function ($scope, $modal, PlayerFactory) {
//module.controller('PlayerListController', function ($scope, $modal, PlayerFactory) {
    $scope.players = PlayerFactory.query();

    $scope.newPlayer = function() {
        $scope.openDetails(new PlayerFactory());
    };

    $scope.openDetails = function (player) {
        $modal.open({
            templateUrl: 'views/player.html',
            controller: 'PlayerController',
            scope: this
        });
    }
});