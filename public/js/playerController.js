app.controller('PlayerController', function ($scope, $modalInstance) {
    $scope.file = {};

    $scope.options = {
        change: function (file) {
            file.$upload('upload', $scope.file)
        }
    };

    $scope.close = function (result) {
        $modalInstance.close()
    };

    $scope.save = function () {
        $scope.player.$save();
        $modalInstance.close();
    };
});