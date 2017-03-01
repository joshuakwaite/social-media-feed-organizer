var app = angular.module("nuviApp");

app.service("httpService", ["$http", "$filter", function ($http, $filter) {

    this.getApi = function () {
        return $http.get("https://nuvi-challenge.herokuapp.com/activities")
    }

    this.getChartData = function () {
        return $http.get("https://nuvi-challenge.herokuapp.com/activities").then(function (response) {
            var apiData = response.data;
            var facebookPosts = $filter('filter')(apiData, "facebook");
            var twitterPosts = $filter('filter')(apiData, "twitter");
            var instagramPosts = $filter('filter')(apiData, "instagram");
            var tumblrPosts = $filter('filter')(apiData, "tumblr");

            socialData = [
                {
                    label: 'Facebook Posts',
                    value: facebookPosts.length
                },
                {
                    label: 'Twitter Posts',
                    value: twitterPosts.length
                },
                {
                    label: 'Instagram Posts',
                    value: instagramPosts.length
                },
                {
                    label: 'Tumblr Posts',
                    value: tumblrPosts.length
                }

            ];


            var today = []
            var todayLikes = 0
            var yesterday = []
            var yesterdayLikes = 0
            var twoDaysAgo = []
            var twoDaysAgoLikes = 0


            for (var i = 0; i < apiData.length; i++) {
                if (apiData[i].activity_date === formatDate(0)) {
                    today.push(apiData[i])
                    todayLikes += apiData[i].activity_likes

                } else if (apiData[i].activity_date === formatDate(1)) {
                    yesterday.push(apiData[i])
                    yesterdayLikes += apiData[i].activity_likes

                } else if (apiData[i].activity_date === formatDate(2)) {
                    twoDaysAgo.push(apiData[i])
                    twoDaysAgoLikes += apiData[i].activity_likes

                }
            }

            socialDataTwo = [
                {
                    label: formatDate(1),
                    value: todayLikes
                },
                {
                    label: formatDate(2),
                    value: yesterdayLikes
                },
                {
                    label: formatDate(3),
                    value: twoDaysAgoLikes
                }
            ];

            var data = [socialData, socialDataTwo]

            return data
        });
    };

    function formatDate(x) {

        var d = new Date()
        d.setDate(d.getDate()-x)

        return date = $filter('date')(d,'yyyy-MM-dd');

    }

}]);