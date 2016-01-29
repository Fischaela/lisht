System.register(['./mock-options', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_options_1, core_1;
    var OptionsService;
    return {
        setters:[
            function (mock_options_1_1) {
                mock_options_1 = mock_options_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            OptionsService = (function () {
                function OptionsService() {
                    this._optionsLocalStorage = JSON.parse(localStorage.getItem('GEILDANKE-options'));
                    this._optionsMockData = mock_options_1.OPTIONS;
                    this._optionsToReturn = this._optionsMockData;
                }
                OptionsService.prototype.getOptions = function () {
                    if (this._optionsLocalStorage != null) {
                        this._optionsToReturn = this._optionsLocalStorage;
                    }
                    return Promise.resolve(this._optionsToReturn);
                };
                OptionsService.prototype.setOptions = function (options) {
                    localStorage.setItem('GEILDANKE-options', JSON.stringify(options));
                };
                OptionsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], OptionsService);
                return OptionsService;
            })();
            exports_1("OptionsService", OptionsService);
        }
    }
});
//# sourceMappingURL=options.service.js.map