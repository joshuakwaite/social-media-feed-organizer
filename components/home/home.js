var app = angular.module("nuviApp");

app.controller("homeController", ["$scope", "httpService", function ($scope, httpService) {

    getApi();

    function getApi() {
        httpService.getApi().then(function (response) {
            console.log(response);
            $scope.activity = response.data
        });
    }

    $scope.liked = function (stuff) {
        $scope.media.activity_likes = stuff.activity_likes += 1
    };

    $scope.addComment = function (stuff) {
        $scope.media.activity_comments = stuff.activity_comments += 1
    };

    $scope.shared = function (stuff) {
        $scope.media.activity_shares = stuff.activity_shares += 1
    };

}]);