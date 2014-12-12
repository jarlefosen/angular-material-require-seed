require.config({
  paths: {
    "angular": "../bower_components/angular/angular",
    "angular-resource": "../bower_components/angular-resource/angular-resource",
    "angular-ui-router": "../bower_components/angular-ui-router/release/angular-ui-router",
    "angular-aria": "../bower_components/angular-aria/angular-aria",
    "angular-animate": "../bower_components/angular-animate/angular-animate",
    "angular-material": "../bower_components/angular-material/angular-material",
    "hammerjs": "../bower_components/hammerjs/hammer.min"
  },
  shim: {
    "angular": {
      exports: "angular"
    },
    "hammerjs": {
      exports: "Hammer"
    },
    "angular-resource": ["angular"],
    "angular-ui-router": ["angular"],
    "angular-aria": ["angular"],
    "angular-animate": ["angular"],
    "angular-material": ["angular", "hammerjs", "angular-aria", "angular-animate"]
  }
});

require([
  "angular",
  "app",
  "hammerjs",
  "routes"
], function (angular, app, hammer) {
  "use strict";

  /* Will launch on app startup */
  function bootstrap() {

    if(!window.Hammer) {
      window.Hammer = hammer;
    }

    app.run();
    angular.bootstrap(document, [app.name]);
  }

  /* If running on Cordova, wait for device ready to bootstrap */
  if (window.cordova) {
    document.addEventListener("deviceready", bootstrap, false);
  } else {
    bootstrap();
  }

});
