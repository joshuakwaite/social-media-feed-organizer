var app = angular.module("nuviApp");

app.service("httpService", ["$http", function ($http) {

    this.getApi = function () {
        return $http.get("https://nuvi-challenge.herokuapp.com/activities")
    }

}]);