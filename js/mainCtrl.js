angular.module('assessment')
  .controller('mainCtrl', function($scope, mainService, $location) {

    $scope.about = function() {
      $location.path('/about');
    }

    $scope.blog = function() {
      $location.path('/blog');
    }

    $scope.shop = function() {
      $location.path('/shop');
      mainService.getProducts().then(function(response) {
        $scope.products = response;
      })
    }

  }) //end
