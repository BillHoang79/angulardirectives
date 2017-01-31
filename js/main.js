var app = angular.module('app', []);
//Wrong way to dec
// var MainController = function($scope) {
//	$scope.val = "re23"	
//	}

app.controller('MainController', function($scope) {
  $scope.val = 1
  $scope.even = false

  $scope.inc = function() {
  	$scope.val += 1
  	$scope.even = $scope.val%2==0
  }
})


//Production way to declare modules, creates dependency, be broken into own files
/*angular.module('controllers', []).controller('MainController', function($scope) {
	$scope.val = "test789"
})
*/
