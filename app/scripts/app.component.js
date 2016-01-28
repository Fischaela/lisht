System.register(['angular2/core', './bookmark-detail.component', './bookmark.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, bookmark_detail_component_1, bookmark_service_1;
    var AppComponent;
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
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_bookmarkService) {
                    this._bookmarkService = _bookmarkService;
                    this.name = [];
                    this.url = [];
                }
                AppComponent.prototype.getBookmarkLists = function () {
                    var _this = this;
                    this._bookmarkService.getBookmarks().then(function (bookmarkLists) { return _this.bookmarkLists = bookmarkLists; });
                };
                AppComponent.prototype.setBookmarks = function () {
                    this._bookmarkService.setBookmarks(this.bookmarkLists);
                };
                AppComponent.prototype.deleteBookmark = function (bookmark, i, j) {
                    this.bookmarkLists[i].hyperlinks.splice(j, 1);
                    this.setBookmarks();
                };
                AppComponent.prototype.addBookmarkListItem = function (bookmark, index) {
                    this.bookmarkLists[index].hyperlinks.push(bookmark);
                    this.setBookmarks();
                    this.name[index] = '';
                    this.url[index] = '';
                };
                ;
                AppComponent.prototype.ngOnInit = function () {
                    this.getBookmarkLists();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'lisht',
                        templateUrl: './app/templates/bookmark-list.html',
                        directives: [bookmark_detail_component_1.BookmarkDetailComponent],
                        providers: [bookmark_service_1.BookmarkService]
                    }), 
                    __metadata('design:paramtypes', [bookmark_service_1.BookmarkService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map