define([
  "app",
  "controller/homeController",
  "controller/otherController",
  "controller/otherDetailController"
], function (app) {
  "use strict";

  app.config([
    "$stateProvider",
    "$urlRouterProvider",
    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state("home", {
          url: "/",
          templateUrl: "partials/home.html",
          controller: "HomeController"
        })
        .state("other", {
          url: "/chat",
          templateUrl: "partials/other.html",
          controller: "OtherController"
        })
        .state("other.detail", {
          url: "/:id",
          templateUrl: "partials/other-detail.html",
          controller: "OtherDetailController"
        });
    }
  ]);
});
