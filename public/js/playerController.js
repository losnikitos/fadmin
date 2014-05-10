app.controller('PlayerController', function ($scope, $modalInstance) {
    $scope.file = {};

    $scope.options = {
        change: function (file) {
            file.$preview($scope.player).then(function(){
//                debugger;
            });


//            file.$upload('upload', $scope.player.photo);
        }
    };

    $scope.close = function (result) {
        $modalInstance.close()
    };

    $scope.save = function () {
        $scope.$save();
        $modalInstance.close();
    };
});