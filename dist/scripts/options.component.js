System.register(['angular2/core', 'angular2/common', './options.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, options_service_1;
    var OptionsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (options_service_1_1) {
                options_service_1 = options_service_1_1;
            }],
        execute: function() {
            OptionsComponent = (function () {
                function OptionsComponent(_optionsService) {
                    this._optionsService = _optionsService;
                }
                OptionsComponent.prototype.getOptions = function () {
                    var _this = this;
                    this._optionsService.getColors().then(function (options) { return _this.options = options; });
                    this._optionsService.getActiveColor().then(function (activeColor) { return _this.activeColor = activeColor; });
                };
                OptionsComponent.prototype.setActiveColor = function (index) {
                    this.activeColor = this.options[index].color;
                    this._optionsService.setActiveColor(this.activeColor);
                };
                OptionsComponent.prototype.ngOnInit = function () {
                    this.getOptions();
                };
                OptionsComponent = __decorate([
                    core_1.Component({
                        selector: 'lisht-options',
                        templateUrl: './templates/options.html',
                        directives: [common_1.NgClass]
                    }), 
                    __metadata('design:paramtypes', [options_service_1.OptionsService])
                ], OptionsComponent);
                return OptionsComponent;
            })();
            exports_1("OptionsComponent", OptionsComponent);
        }
    }
});
//# sourceMappingURL=options.component.js.map