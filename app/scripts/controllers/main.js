'use strict';

var app = angular.module('appAngApp', []);


app.controller('MainCtrl', function ($scope) {
  $scope.age = 50;

  $scope.showContent = false;

  $scope.checkAge = function () {
    return ($scope.age >= 18) ? "majeur" : "mineur";
  };


  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});
