"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title_size = core_1.input(1.6);
        this.title_color = core_1.input.required();
        this.isH1 = core_1.input(true);
        this.tite_size_style = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.tite_size_style = "font-size:" + this.title_size() + "rem";
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            imports: [],
            templateUrl: './header.component.html',
            styleUrl: './header.component.css'
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
