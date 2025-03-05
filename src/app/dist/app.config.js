"use strict";
exports.__esModule = true;
exports.appConfig = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
var app_routes_1 = require("./app.routes");
exports.appConfig = {
    providers: [
        animations_1.provideAnimations(),
        core_1.provideZoneChangeDetection({ eventCoalescing: true }),
        router_1.provideRouter(app_routes_1.routes, router_1.withViewTransitions()),
    ]
};
