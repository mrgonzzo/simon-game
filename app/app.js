'use strict';
(function (angular) {
  /* Declaramos el módulo */
  angular.module('app', ['ui.router']);

  angular.module('app').config(['$stateProvider', '$urlRouterProvider', appConfig]);

  function appConfig($stateProvider, $urlRouterProvider,ngaudio) {
    var main = {
      name: 'main',
      url: '/main',
      template: '<comp-mainview></comp-mainview>'
    };
    var about = {
      name: 'aboutus',
      url: '/aboutus',
      template: '<comp-aboutus></comp-aboutus>'
    };
    
    
    $stateProvider.state(main);
    $stateProvider.state(about);
    $urlRouterProvider.otherwise('/main');
  }
})(angular);