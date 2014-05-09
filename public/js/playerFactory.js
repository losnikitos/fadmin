app.factory('PlayerFactory', function ($resource) {
    return $resource("/players/:id");
});