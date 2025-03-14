"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var header_component_1 = require("../../header/header.component");
var router_1 = require("@angular/router");
var AproposComponent = /** @class */ (function () {
    function AproposComponent() {
        this.color_class = 'text-gray-200';
    }
    AproposComponent = __decorate([
        core_1.Component({
            selector: 'app-apropos',
            imports: [header_component_1.HeaderComponent, router_1.RouterLink],
            templateUrl: './apropos.component.html',
            styleUrl: './apropos.component.css'
        })
    ], AproposComponent);
    return AproposComponent;
}());
exports["default"] = AproposComponent;
