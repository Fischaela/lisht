System.register(['angular2/core', './bookmark-detail.component', './bookmark.service', './options.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, bookmark_detail_component_1, bookmark_service_1, options_service_1;
    var BookmarkComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bookmark_detail_component_1_1) {
                bookmark_detail_component_1 = bookmark_detail_component_1_1;
            },
            function (bookmark_service_1_1) {
                bookmark_service_1 = bookmark_service_1_1;
            },
            function (options_service_1_1) {
                options_service_1 = options_service_1_1;
            }],
        execute: function() {
            BookmarkComponent = (function () {
                function BookmarkComponent(_bookmarkService, _optionsService) {
                    this._bookmarkService = _bookmarkService;
                    this._optionsService = _optionsService;
                    this.name = [];
                    this.url = [];
                }
                BookmarkComponent.prototype.getBookmarkLists = function () {
                    var _this = this;
                    this._bookmarkService.getBookmarks().then(function (bookmarkLists) { return _this.bookmarkLists = bookmarkLists; });
                    this._optionsService.getActiveColor().then(function (activeColor) { return _this.activeColor = activeColor; });
                };
                BookmarkComponent.prototype.setBookmarks = function () {
                    this._bookmarkService.setBookmarks(this.bookmarkLists);
                };
                BookmarkComponent.prototype.deleteBookmark = function (bookmark, i, j) {
                    this.bookmarkLists[i].hyperlinks.splice(j, 1);
                    this.setBookmarks();
                };
                BookmarkComponent.prototype.addBookmarkListItem = function (bookmark, index) {
                    this.bookmarkLists[index].hyperlinks.push(bookmark);
                    this.setBookmarks();
                    this.name[index] = '';
                    this.url[index] = '';
                };
                ;
                BookmarkComponent.prototype.ngOnInit = function () {
                    this.getBookmarkLists();
                };
                BookmarkComponent = __decorate([
                    core_1.Component({
                        selector: 'lisht-bookmarks',
                        templateUrl: './templates/bookmarklist.html',
                        directives: [bookmark_detail_component_1.BookmarkDetailComponent],
                        providers: [bookmark_service_1.BookmarkService]
                    }), 
                    __metadata('design:paramtypes', [bookmark_service_1.BookmarkService, options_service_1.OptionsService])
                ], BookmarkComponent);
                return BookmarkComponent;
            })();
            exports_1("BookmarkComponent", BookmarkComponent);
        }
    }
});
//# sourceMappingURL=bookmark.component.js.map