var app = angular.module("nuviApp");

app.controller("dataController", ["$scope", "httpService", function ($scope, httpService) {

    $scope.width = 350;
    $scope.height = 350;
    $scope.barYAxis = 'Posts';
    $scope.barXAxis = 'Social Media Provider';

    $scope.lineYAxis = 'Likes';
    $scope.lineXAxis = 'Date';

    // Data


    httpService.getChartData().then(function (response) {
        $scope.data = response[0];
        findLength()
        $scope.likesData = response[1];
        findLengthTwo()
    });

    // httpService.getPostProviderData().then(function (response) {
    //     $scope.likesData = response[1];
    //     findLengthTwo()
    // });


    $scope.max = 0;
    function findLength() {
        var arrLength = $scope.data.length;
        for (var i = 0; i < arrLength; i++) {
            if ($scope.data[i].value > $scope.max)
                $scope.max = $scope.data[i].value;
        }
    }

    $scope.maxTwo = 0;
    function findLengthTwo() {
        var arrLength = $scope.likesData.length;
        for (var i = 0; i < arrLength; i++) {
            if ($scope.likesData[i].value > $scope.maxTwo)
                $scope.maxTwo = $scope.likesData[i].value;
        }
    }


}]);