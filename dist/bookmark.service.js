System.register(['./mock-bookmarks', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_bookmarks_1, core_1;
    var BookmarkService;
    return {
        setters:[
            function (mock_bookmarks_1_1) {
                mock_bookmarks_1 = mock_bookmarks_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BookmarkService = (function () {
                function BookmarkService() {
                    this._bookmarksLocalStorage = JSON.parse(localStorage.getItem('GEILDANKE-lisht'));
                    this._bookmarksMockData = mock_bookmarks_1.BOOKMARKS;
                    this._bookmarksToReturn = this._bookmarksMockData;
                }
                BookmarkService.prototype.getBookmarks = function () {
                    if (this._bookmarksLocalStorage != null) {
                        this._bookmarksToReturn = this._bookmarksLocalStorage;
                    }
                    return Promise.resolve(this._bookmarksToReturn);
                };
                BookmarkService.prototype.setBookmarks = function (bookmarks) {
                    localStorage.setItem('GEILDANKE-lisht', JSON.stringify(bookmarks));
                };
                BookmarkService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], BookmarkService);
                return BookmarkService;
            })();
            exports_1("BookmarkService", BookmarkService);
        }
    }
});
//# sourceMappingURL=bookmark.service.js.map