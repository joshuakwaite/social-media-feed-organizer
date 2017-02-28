var app = angular.module("nuviApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "homeController"
        })
        .otherwise({
            redirectTo: "/home"
        });

}]);