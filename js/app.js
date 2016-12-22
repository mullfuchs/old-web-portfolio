angular.module("PortfolioApp", ['PortfolioCtrl','ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'views/main.html',
  })
  // .state('about', {
  //   url: '/about',
  //   templateUrl: 'views/about.html'
  // })
  .state('games',{
    url: '/games',
    templateUrl: 'views/games.html',
  })
  .state('webapps',{
    url: '/webapps',
    templateUrl: 'views/webapps.html'
  })
  .state('projects',{
    url: '/projects',
    templateUrl: 'views/personalproj.html'
  })
  .state('contact',{
    url: '/contact',
    templateUrl: 'views/contact.html'
  })
  .state('resume',{
    url: '/resume',
    templateUrl: 'views/resume.html'
  });

  $locationProvider.html5Mode(true);
}]);