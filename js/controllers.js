angular.module("PortfolioCtrl",['PortfolioFactories', 'PortfolioFilters'])
.controller("GameCtrl", ['$scope', 'Games', function($scope, Games){

  $scope.games = {};

  $scope.showAll = function(){
    Games.query(function success(res){
      $scope.games = res.results;
      console.log(res);
    }, function error(res){
      console.log(res);
    });
  }

  $scope.showAll();

}])