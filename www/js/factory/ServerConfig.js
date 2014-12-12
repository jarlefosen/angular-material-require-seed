define([
  "app"
], function(app) {
  "use strict";
  app.factory("ServerConfig", [
    function() {

      var HOST = "http://localhost:3000";

      return {
        host: HOST
      };
    }
  ])
});
