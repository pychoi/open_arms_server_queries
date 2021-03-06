var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/main',{
            templateUrl: "/assets/views/routes/adminwelcome.html",
            controller: "AdminWelcomeController"
        })
        .when('/addclient',{
            templateUrl: "/assets/views/routes/addclient.html",
            controller: "AddClientController"
        })
        .when('/calculatemeals',{
            templateUrl: "/assets/views/routes/calculatemeals.html",
            controller: "CalculateMealsController"
        })
        .when('/createmeal',{
            templateUrl: "/assets/views/routes/createmeal.html",
            controller: "CreateMealController"
        })
        .when('/createmenu',{
            templateUrl: "/assets/views/routes/createmenu.html",
            controller: "CreateMenuController"
        })
        .when('/searchclient',{
            templateUrl: "/assets/views/routes/searchclient.html",
            controller: "SearchClientController"
        })
        .when('/viewmeal',{
            templateUrl: "/assets/views/routes/viewmeal.html",
            controller: "ViewMealController"
        })
        .when('/viewmenu',{
            templateUrl: "/assets/views/routes/viewmenu.html",
            controller: "ViewMenuController"
        })
        .otherwise('/main')
}]);