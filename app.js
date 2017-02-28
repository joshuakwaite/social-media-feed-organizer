var app = angular.module("nuviApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "homeController"
        })
        .when("/data", {
            templateUrl: "components/data/data.html",
            controller: "dataController"
        })
        .otherwise({
            redirectTo: "/home"
        });

}]);