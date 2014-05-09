var app = angular.module('fadmin', ['ngResource', 'ngRoute', 'ui.bootstrap', 'ui.date', 'oi.file']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/playerList.html',
            controller: 'PlayerListController'})
        .otherwise({redirectTo: '/'});
}]);