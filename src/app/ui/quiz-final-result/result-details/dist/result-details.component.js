"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var quiz_service_1 = require("../../../Services/quiz.service");
var router_1 = require("@angular/router");
var ResultDetailsComponent = /** @class */ (function () {
    function ResultDetailsComponent() {
        this.quizS = core_1.inject(quiz_service_1.QuizService);
        this.questions_done = [];
        this.questions_doneSucced = [];
    }
    ResultDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizS.questions_done_obs.subscribe({
            next: function (questions_done_) {
                _this.questions_done = questions_done_;
                _this.questions_doneSucced = _this.questions_done.filter(function (question) { return question.userAnswer === question.rightAnswer; });
            }
        });
    };
    ResultDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-result-details',
            imports: [router_1.RouterLink],
            templateUrl: './result-details.component.html',
            styleUrl: './result-details.component.css'
        })
    ], ResultDetailsComponent);
    return ResultDetailsComponent;
}());
exports["default"] = ResultDetailsComponent;
