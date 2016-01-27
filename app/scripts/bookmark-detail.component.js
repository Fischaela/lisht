System.register(['angular2/core'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, core_3;
    var BookmarkDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            }],
        execute: function() {
            BookmarkDetailComponent = (function () {
                function BookmarkDetailComponent() {
                    this._submitted = false;
                    this.bookmarkChanged = new core_3.EventEmitter();
                    this.bookmarkDeleted = new core_3.EventEmitter();
                }
                BookmarkDetailComponent.prototype.onSubmit = function (bookmark) {
                    this._submitted = false;
                    this.bookmarkChanged.emit(bookmark);
                };
                BookmarkDetailComponent.prototype.onDelete = function (bookmark) {
                    this.bookmarkDeleted.emit(bookmark);
                };
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', core_3.EventEmitter)
                ], BookmarkDetailComponent.prototype, "bookmarkChanged", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', core_3.EventEmitter)
                ], BookmarkDetailComponent.prototype, "bookmarkDeleted", void 0);
                BookmarkDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'bookmark',
                        templateUrl: './app/templates/bookmark.html',
                        inputs: ['bookmark']
                    }), 
                    __metadata('design:paramtypes', [])
                ], BookmarkDetailComponent);
                return BookmarkDetailComponent;
            }());
            exports_1("BookmarkDetailComponent", BookmarkDetailComponent);
        }
    }
});
//# sourceMappingURL=bookmark-detail.component.js.map