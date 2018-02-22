var app = angular.module('app', [
  'ngRoute',
  'ui.router',
  'ngAnimate'
]);

(function () {
  app.config([
    '$routeProvider',
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function (
      $routeProvider,
      $stateProvider,
      $urlRouterProvider,
      $locationProvider
    ) {

    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          'topSegment': {
            templateUrl: '/static/views/partials/home/top.html',
            controller: 'homeTopController'
          },
          'bottomSegment': {
            templateUrl: '/static/views/partials/home/bottom.html',
            controller: 'homeBottomController'
          }
        }
      })
      .state('maps', {
        url: '/maps',
        views: {
          'topSegment': {
            templateUrl: '/static/views/partials/maps/top.html',
            controller: 'mapsTopController'
          },
          'bottomSegment': {
            templateUrl: '/static/views/partials/maps/bottom.html',
            controller: 'mapsBottomController'
          }
        }
      })
      .state('item', {
        url: '/item/:itemId',
        views: {
          'topSegment': {
            templateUrl: '/static/views/partials/items/top.html',
            controller: 'itemsTopController'
          },
          'bottomSegment': {
            templateUrl: '/static/views/partials/items/bottom.html',
            controller: 'itemsBottomController'
          }
        }
      });


      $urlRouterProvider.otherwise(
        "/home"
      );

      $locationProvider.html5Mode(true);

    }]);

})();





// var app = angular.module('app', ["ui.router"]);
//  app.config(function (
//    $stateProvider,
//    $locationProvider
//  ) {
//  $stateProvider
//      .state('index', {
//          url: "",
//          views: {
//              "topSegment": {
//                  templateUrl: "index.viewA"
//              },
//              "bottomSegment": {
//                  template: "index.viewB"
//              }
//          }
//      })
//      .state('home', {
//          url: "/home",
//          views: {
//              "topSegment": {
//                  template: "route1.viewA"
//              },
//              "bottomSegment": {
//                  template: "route1.viewB"
//              }
//          }
//      })
//      .state('route2', {
//          url: "/route2",
//          views: {
//              "top-segment": {
//                  template: "route2.viewA"
//              },
//              "bottom-segment": {
//                  template: "route2.viewB"
//              }
//          }
//      });
//
//      $locationProvider.html5Mode(true);
//
//  });
