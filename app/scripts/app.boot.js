System.register(['angular2/platform/browser', './app.component', './options.service'], function(exports_1) {
    var browser_1, app_component_1, options_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (options_service_1_1) {
                options_service_1 = options_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [options_service_1.OptionsService]);
        }
    }
});
//# sourceMappingURL=app.boot.js.map