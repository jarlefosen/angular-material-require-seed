define([
  "app",
  "service/contentService"
], function(app) {
  "use strict";

  app.controller("OtherController", [
    "$scope", "$state", "NotifyService", "ContentService",
    function($scope, $state, NotifyService, ContentService) {

      // Define a local function to retreive a list from the service.
      function getList() {
        NotifyService.toast("Getting list from service...");

        ContentService.getList().then(
          function(list) {
            $scope.items = list;
          },
          function() {
            NotifyService.alert("An error occured", "We could not get list from the service.");
          }
        )
      }

      // Then we can assign the function to a scope variable
      // so that it is accessible from the view.
      // The reason I call it "reloadList" and not "getList" as
      // the function name is, is to show that functions and variables
      // in a controller is only accessible to the view if it's put on
      // the scope. See partials/other.html and look for reloadList()
      $scope.reloadList = getList;

      // Alternatively; we can do it like this.
      // Here we assign a new function to a variable.
      $scope.openItem = function (item) {
        $state.go("other.detail", {id: item.id});
      };

      // This is just a text to indicate that the controller is
      // connected to the view
      $scope.text = "You entered Other View with Other Controller";

      // Here I will store the loaded list of items
      $scope.items = [];

    }
  ]);
});
