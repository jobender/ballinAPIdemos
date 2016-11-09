var app = angular.module('weatherMod', []);

app.controller('weatherCtrl', function($http, $scope) {

  $scope.findWeather = function(userState, userCity) {

    var userState = userState;
    var userCity = userCity;

    $http.get('http://api.wunderground.com/api/6223b2f5321ee9e1/conditions/q/' + userState + '/' + userCity + '.json').then(function successCallback(response) {

      var weatherData = response;
      console.log(weatherData.data.current_observation);

      $scope.tempF = weatherData.data.current_observation.temp_f;
      $scope.weather = weatherData.data.current_observation.weather;
      $scope.windspeed = weatherData.data.current_observation.wind_mph;


    });

  }

  $scope.searchGify = function(userSearch) {

    var ourSearch = userSearch;

    $http.get('http://api.giphy.com/v1/gifs/search?q=' + ourSearch + '&api_key=dc6zaTOxFJmzC').then(function successCallback(response) {

      $scope.ourGify = response;
      console.log($scope.ourGify.data.data);
      $scope.funTimes = $scope.ourGify.data.data;

    })


  }



})
