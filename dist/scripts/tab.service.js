///<reference path="chrome.d.ts" />
System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TabService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TabService = (function () {
                function TabService() {
                    // check, if being extension or not
                    if (typeof chrome.browserAction !== 'undefined') {
                        chrome.browserAction.onClicked.addListener(function (tab) {
                            var _bookmarksLocalStorage = JSON.parse(localStorage.getItem('GEILDANKE-lisht')), _bookmarksMockData = [
                                {
                                    'hyperlinks': [
                                        { 'name': 'Twitter', 'url': 'https ://twitter.com' },
                                        { 'name': 'Github', 'url': 'https ://github.com' },
                                        { 'name': 'Facebook', 'url': 'https ://facebook.com' }
                                    ]
                                },
                                {
                                    'hyperlinks': [
                                        { 'name': 'Geildanke', 'url': 'https ://geildanke.com' },
                                        { 'name': 'Sitepoint', 'url': 'https ://sitepoint.com' },
                                        { 'name': 'Codepen', 'url': 'https ://codepen.com' }
                                    ]
                                },
                                {
                                    'hyperlinks': [
                                        { 'name': 'Dribbble', 'url': 'https ://dribbble.com' },
                                        { 'name': 'Designer News', 'url': 'https ://news.layervault.com' },
                                        { 'name': 'Mail', 'url': 'https ://mail.google.com' }
                                    ]
                                }
                            ], _bookmarksToReturnArray = _bookmarksMockData;
                            if (_bookmarksLocalStorage !== null) {
                                _bookmarksToReturnArray = _bookmarksLocalStorage;
                            }
                            chrome.tabs.getSelected(null, function (tab) {
                                var _newBookmarkName = {
                                    name: tab.title,
                                    url: tab.url
                                }, _bookmarksToReturn = '';
                                _bookmarksToReturnArray[0].hyperlinks.push(_newBookmarkName);
                                _bookmarksToReturn = JSON.stringify(_bookmarksToReturnArray);
                                localStorage.setItem('GEILDANKE-lisht', _bookmarksToReturn);
                            });
                        });
                    }
                }
                TabService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TabService);
                return TabService;
            })();
            exports_1("TabService", TabService);
        }
    }
});
//# sourceMappingURL=tab.service.js.map