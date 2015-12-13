myApp.controller('AdminWelcomeController', ["$scope", "$http", function($scope, $http){
    console.log("AdminWelcome Controller Online");

    $http.get('/getmealcount', {params: {startDate: '2015-12-05', endDate: '2015-12-11'}}).then(function(response){
        console.log(response.data);
    });

    //$http.get('/getmeals/showAll').then(function(response){
    //    console.log(response.data);
    //});

    //$http.get('/getmeals/searchMeal', {params: {searchTerm: 'mac and cheese'}}).then(function(response){
    //    console.log(response.data);
    //});

}]);