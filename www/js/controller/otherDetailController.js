define([
  "app",
  "service/contentService"
], function(app) {
  "use strict";
  app.controller("OtherDetailController", [
    "$scope", "$stateParams", "ContentService",
    function($scope, $stateParams, ContentService) {
      $scope.text = "You have entered the detail view";
      $scope.param = $stateParams.id;
      ContentService.getItem($stateParams.id)
        .then(
        function(item) {
          // If this function is invoked if the getItem call was success.
          $scope.item = item;
        },
        function () {
          // If we encounter this function, we got an error.
          // In this preview we will remove the item when an error occurs.
          // Try changing the ID in the URL of your browser to 999.
          $scope.item = undefined;
        }
      );
    }
  ]);
});
