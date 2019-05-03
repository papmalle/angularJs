'use strict';

var app = angular.module("appAngApp", []);

app.controller("TestCtrl", function ($scope) {
  $scope.age = function () {
    return 20;
  };

  $scope.title = "Titre";
  $scope.text = "Contenu";

  $scope.text = "Titre";

  $scope.name = "World";

  function calculateDiscount(newValue, oldValue, scope) {
    console.log(newValue)
    $scope.discount = (newValue > 100) ? newValue * 0.10 : 0;
  }


  $scope.$watch($scope.age, calculateDiscount);
});

app.directive("expander", function () {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    scope: {title: '=expanderTitle'},
    template: '<div>' +
      '<div class="title" ng-click="toggle()">{{title}}</div>' +
      '<div class="body" ng-show="showMe" ng-transclude></div>' +
      '</div>',
    link: function (scope, element, attrs) {
      scope.showMe = false;
      scope.toggle = function toggle() {
        scope.showMe = !scope.showMe;
      };
    }
  };
});
