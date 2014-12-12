define([
  "app",
  "angular-material"
], function(app) {
  "use strict";

  app.service("NotifyService", [
    "$mdDialog", "$mdToast",
    function($mdDialog, $mdToast) {

      function alert(title, body, confirm) {
        var alert = $mdDialog.alert()
          .title(title)
          .content(body)
          .ok(confirm || "OK");
        $mdDialog.show(alert);
      }

      function prompt(title, body, yes, no) {
        var prompt = $mdDialog.confirm()
          .title(title)
          .content(body)
          .ok(yes || "YES")
          .cancel(no || "NO");
        return $mdDialog.show(prompt);
      }

      function toast(message, action) {
        var toast = $mdToast.simple().content(message);
        if (action)
          toast = toast.action(action);
        $mdToast.show(toast);
      }

      return {
        alert: alert,
        prompt: prompt,
        toast: toast
      };
    }
  ]);
});
