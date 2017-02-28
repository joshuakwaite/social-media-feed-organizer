var app = angular.module("nuviApp");

app.controller("homeController", ["$scope", "httpService", function ($scope, httpService) {

    getApi();

    function getApi() {
        httpService.getApi().then(function (response) {
            console.log(response);
            $scope.activity = response.data
        });
    }

}]);