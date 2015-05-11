var app = angular.module('homeworkSubmittion', ['ngRoute']);

app.controller('homeworkController', function($scope, Homework) {
    $scope.Homeworks = Homework;
    $scope.showDetails = {};
    for(var i in Homework) {
        $scope.showDetails[Homework[i].assignment] = false;
    }
    $scope.clickOnName = function(hw) {
        $scope.showDetails[hw.assignment] = !$scope.showDetails[hw.assignment];
        console.log($scope.showDetails);
    }
});

app.factory('Homework', function() {
    return [{
        assignment: 'Test First JavaScript',
        url: 'https://github.com/panwenkai/FullstackTestFirst',
        status: 'completed'
    }, {
        assignment: 'Angular Day 1',
        url: 'https://github.com/panwenkai/AngularJsWorkshop1',
        status: 'completed'
    }, {
        assignment: 'Angular Day 2',
        url: 'https://github.com/panwenkai/AngularJsWorkshop2',
        status: 'completed'
    }, {
        assignment: 'Angular Day 3',
        url: 'https://github.com/panwenkai/AngularJSWorkshop3',
        status: 'completed'
    }];
});

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/about', {
                templateUrl: 'about.html'
            }).
            when('/',{
                templateUrl: 'main.html'
            });
    }]);