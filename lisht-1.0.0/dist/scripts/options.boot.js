System.register(['angular2/platform/browser', './options.component', './options.service'], function(exports_1) {
    var browser_1, options_component_1, options_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (options_component_1_1) {
                options_component_1 = options_component_1_1;
            },
            function (options_service_1_1) {
                options_service_1 = options_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(options_component_1.OptionsComponent, [options_service_1.OptionsService]);
        }
    }
});
//# sourceMappingURL=options.boot.js.map