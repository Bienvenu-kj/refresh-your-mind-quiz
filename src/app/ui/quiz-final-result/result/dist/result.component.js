"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var quiz_service_1 = require("../../../Services/quiz.service");
var common_1 = require("@angular/common");
var ResultComponent = /** @class */ (function () {
    function ResultComponent() {
        this.quizS = core_1.inject(quiz_service_1.QuizService);
        this.router = core_1.inject(router_1.Router);
        this.expeted_score = this.quizS.expetedScore();
    }
    ResultComponent.prototype.resultPageRedirection = function (route) {
        this.quizS.reset();
        this.router.navigate([route]);
    };
    ResultComponent = __decorate([
        core_1.Component({
            selector: 'app-result',
            imports: [router_1.RouterLink, common_1.AsyncPipe],
            templateUrl: './result.component.html',
            styleUrl: './result.component.css'
        })
    ], ResultComponent);
    return ResultComponent;
}());
exports["default"] = ResultComponent;
