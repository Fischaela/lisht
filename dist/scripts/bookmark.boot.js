System.register(['angular2/platform/browser', './bookmark.component', './options.service'], function(exports_1) {
    var browser_1, bookmark_component_1, options_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (bookmark_component_1_1) {
                bookmark_component_1 = bookmark_component_1_1;
            },
            function (options_service_1_1) {
                options_service_1 = options_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(bookmark_component_1.BookmarkComponent, [options_service_1.OptionsService]);
        }
    }
});
//# sourceMappingURL=bookmark.boot.js.map