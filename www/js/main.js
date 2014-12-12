
// main.js is the root of the project.
// This tells RequireJS where files are, and can give shortcut-names to files
// located in other directories - like bower_components or node_modules.
require.config({
  paths: {
    "angular": "../bower_components/angular/angular",
    "angular-resource": "../bower_components/angular-resource/angular-resource",
    "angular-ui-router": "../bower_components/angular-ui-router/release/angular-ui-router",
    "angular-aria": "../bower_components/angular-aria/angular-aria",
    "angular-animate": "../bower_components/angular-animate/angular-animate",
    "angular-material": "../bower_components/angular-material/angular-material",
    "hammerjs": "../bower_components/hammerjs/hammer.min",
    "jquery": "../bower_components/jquery/dist/jquery.min",
    "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap.min"
  },
  shim: {
    "angular": {
      exports: "angular"
    },
    "hammerjs": {
      exports: "Hammer"
    },
    // Some files needs to be listed here if they have dependencies themselves.
    // This means that if we require bootstrap to load, jquery will be loaded first.
    "bootstrap": ["jquery"],
    "angular-resource": ["angular"],
    "angular-ui-router": ["angular"],
    "angular-aria": ["angular"],
    "angular-animate": ["angular"],
    "angular-material": ["angular", "hammerjs", "angular-aria", "angular-animate"]
  }
});

// The first thing we do is to instantiate the whole application.
// This is called bootstrapping - I think.
// We require that some files are loaded, and they are injected
require([
  "angular",
  "app",
  "hammerjs",
  "jquery",
  "bootstrap",
  "routes"
], function (angular, app, hammer, $) {
  "use strict";

  /* Will launch on app startup */
  function bootstrap() {
    // jQuery needs to be defined on window as both $ and jQuery.
    window.$ = $;
    window.jQuery = $;
    // Hammer must be available on window for Material Design to work.
    window.Hammer = hammer;

    // We run the application
    app.run();
    // And bootstraps it to the document.
    angular.bootstrap(document, [app.name]);
  }

  // If we are running on Cordova, we should wait for the device to be ready
  // before bootstrapping.
  if (window.cordova) {
    document.addEventListener("deviceready", bootstrap, false);
  } else {
    bootstrap();
  }

});
