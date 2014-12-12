
// Define which files app.js depends on.
// Which files are required to load before we can run this.
define([
  "angular",
  "angular-ui-router",
  "angular-animate",
  "angular-material",
  "angular-resource"
], function(angular) {
  "use strict";

  // The name of your app goes here together with it's dependencies.
  return angular.module("app",[
    "ui.router",
    "ngAnimate",
    "ngMaterial",
    "ngResource"
  ]);

});