angular.module("PortfolioFactories",['ngResource'])
.factory('Games', ['$http', function($http){
  return $http('https://itch.io/api/1/78hW3T8Vw4242v91JG8LqT9K2803mWelLQgQ2Qi8/my-games', {}
    );
}]);