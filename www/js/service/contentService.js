define([
  "app"
], function(app) {
  "use strict";

  app.service("ContentService", [
    "$q", "$timeout",
    function($q, $timeout) {

      var list = [
        {
          id: "1",
          name: "Item one",
          description: "This is description for Item One"
        },
        {
          id: "2",
          name: "Item two",
          description: "This is description for Item Two"
        },
        {
          id: "3",
          name: "Item three",
          description: "This is description for Item Three"
        },
        {
          id: "4",
          name: "Item four",
          description: "This is description for Item Four"
        },
        {
          id: "5",
          name: "Item five",
          description: "This is description for Item Five"
        }
      ];

      function getList() {
        var deferred = $q.defer();

        $timeout(function() {
          deferred.resolve(list);
        }, 500);

        return deferred.promise;
      }

      function getItem(id) {
        var deferred = $q.defer();

        var item;

        for(var i = 0; i < list.length; i++) {
          if (list[i].id === id) {
            item = list[i];
            break;
          }
        }

        if (item !== undefined) {
          // If we find the element, resolve the promise
          // with item as argument
          deferred.resolve(item);
        } else {
          // If something went wrong, we reject it.
          deferred.reject();
        }

        return deferred.promise;
      }

      return {
        getList: getList,
        getItem: getItem
      };
    }
  ]);
});
