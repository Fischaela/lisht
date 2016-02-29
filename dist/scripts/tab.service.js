///<reference path="chrome.d.ts" />
System.register(['angular2/core', './bookmark.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, bookmark_service_1;
    var TabService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bookmark_service_1_1) {
                bookmark_service_1 = bookmark_service_1_1;
            }],
        execute: function() {
            TabService = (function () {
                function TabService(bookmarkService) {
                    console.log('TabService initialized');
                    // check, if being extension or not
                    if (typeof chrome.browserAction !== 'undefined') {
                        chrome.browserAction.onClicked.addListener(function (tab) {
                            var bookmarkLists;
                            bookmarkService.getBookmarks().then(function (bookmarkLists) {
                                bookmarkLists = bookmarkLists;
                                chrome.tabs.getSelected(null, function (tab) {
                                    var newBookmark = {
                                        name: tab.title,
                                        url: tab.url
                                    };
                                    bookmarkLists[0].hyperlinks.push(newBookmark);
                                    bookmarkService.setBookmarks(bookmarkLists);
                                });
                            });
                        });
                    }
                }
                TabService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [bookmark_service_1.BookmarkService])
                ], TabService);
                return TabService;
            }());
            exports_1("TabService", TabService);
        }
    }
});
//# sourceMappingURL=tab.service.js.map