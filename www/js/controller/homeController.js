
// When using RequireJS, we have to define which files we depend on.
// These files are relative to the location of main.js.
// You should not append the .js-extension, as RequireJS does this automatically.
define([
  "app",
  "service/notifyService"
], function(app) {
  "use strict"; // This is here because of a reason.

  // This creates a controller on the app named HomeController.
  // The list beneath is of all the module-dependencies it has.
  // These are not the file-names, but the instances that you want to access.
  // The last argument in the list is a function that is injected with the instances named before.
  app.controller("HomeController", [
    "$scope", "$state", "NotifyService",
    function($scope, $state, NotifyService) {

      // This is a function that is available on the scope.
      // Check out how the toOtherView() function is used in the partials/home.html view.
      $scope.toOtherView = function() {
        // We have defined a service in service/notifyService.js which returns a set of
        // functions accessible us. Toast is one of them.
        NotifyService.toast("Moving to Other View", "Ok");

        // In routes.js we have defined our routes. Since we are using ui-router, we can move between
        // each part of the application using States. A state can have sub-states as well,
        // which you will see in controllers/otherController.js
        $state.go("other");
      }
    }
  ]);

});
