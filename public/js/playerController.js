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
        console.log(this);
        $modal.open({
            templateUrl: 'views/details.html',
            controller: 'PlayerDetails',
            scope: this
        });
    }
});

module.controller('PlayerDetails', function ($scope, $modalInstance) {
    $scope.file = {};

    $scope.options = {
        //Вызывается для каждого выбранного файла
        change: function (file) {
            //В file содержится информация о файле
            //Загружаем на сервер
            file.$upload('upload', $scope.file)
        }
    }


    $scope.close = function (result) {
        $modalInstance.close()
    }

    $scope.save = function () {
        $scope.player.$save();
        $modalInstance.close();
    }
})