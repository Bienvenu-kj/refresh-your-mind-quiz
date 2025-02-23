"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var quiz_service_1 = require("../../Services/quiz.service");
var GamingPageComponent = /** @class */ (function () {
    function GamingPageComponent() {
        this.quizS = core_1.inject(quiz_service_1.QuizService);
        // signales pour differents états
        this.score = core_1.signal(0);
        this.vies = core_1.signal(5);
        this.ChoiceAlreadyDone = core_1.signal(false);
        this.thereIsWrongChoice = core_1.signal(false);
        this.sontDesactives = core_1.signal(true);
        // fin signales
        this.buttons = document.getElementsByClassName('choice_button');
    }
    GamingPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizS.getQuestions();
        // abonnements
        this.subscription_question = this.quizS.question_observ.subscribe({
            next: function (question) {
                _this.question = question;
            }
        });
        this.subscription_score = this.quizS.score.subscribe({
            next: function (score) {
                _this.score.set(score);
            }
        });
        this.subscription_vies = this.quizS.vies.subscribe({
            next: function (vies) {
                _this.vies.set(vies);
            }
        });
        // fin abonnments
    };
    GamingPageComponent.prototype.ngOnDestroy = function () {
        this.subscription_question.unsubscribe();
    };
    // Button pour valider la reponse
    GamingPageComponent.prototype.validerReponse = function (event, Button, choix, question) {
        return __awaiter(this, void 0, void 0, function () {
            var Button_via_event, rightAnswer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Button_via_event = event.target;
                        rightAnswer = question.answer;
                        // on anime le button cliqué en attende de validation
                        Button.classList.toggle('onChoose-answer');
                        this.ChoiceAlreadyDone.set(true);
                        // on attend pendant 2s avant de desactiver les boutons et poursuivres avec les autres operations /;
                        return [4 /*yield*/, this.quizS.attendrePendant(2000)];
                    case 1:
                        // on attend pendant 2s avant de desactiver les boutons et poursuivres avec les autres operations /;
                        _a.sent();
                        // desactivation des buttons /;
                        this.activOuDesactiveButtons(this.buttons);
                        if (!(choix === question.answer)) return [3 /*break*/, 3];
                        Button_via_event.classList.toggle('good-answer');
                        // on attend apres 2.5s avant de mettre à jour le score /;
                        return [4 /*yield*/, this.quizS.attendrePendant(3500)];
                    case 2:
                        // on attend apres 2.5s avant de mettre à jour le score /;
                        _a.sent();
                        this.quizS.upDateScore(true);
                        return [3 /*break*/, 5];
                    case 3:
                        Button_via_event.classList.toggle('wrong-answer');
                        this.thereIsWrongChoice.set(true);
                        // on attend après 2.5s avant de mettre à jour le score et les vies /;
                        return [4 /*yield*/, this.quizS.attendrePendant(3500)];
                    case 4:
                        // on attend après 2.5s avant de mettre à jour le score et les vies /;
                        _a.sent();
                        this.quizS.upDateScore(false);
                        this.quizS.upDateLife();
                        _a.label = 5;
                    case 5: 
                    // on attend encore après 4s avant d'afficher les autres questions /;
                    return [4 /*yield*/, this.quizS.attendrePendant(1500)];
                    case 6:
                        // on attend encore après 4s avant d'afficher les autres questions /;
                        _a.sent();
                        //On envoie les questions repondues au service
                        this.quizS.putQuestionDone(question, choix, rightAnswer);
                        // on active les boutons apres la validation de la reponse
                        this.activOuDesactiveButtons(this.buttons);
                        // on change l'etat de tous les propriété et classes qui gerent l'etat de boutons
                        this.ChoiceAlreadyDone.set(false);
                        this.thereIsWrongChoice.set(false);
                        Button_via_event.classList.remove('wrong-answer');
                        Button_via_event.classList.remove('good-answer');
                        Button.classList.remove('onChoose-answer');
                        // on charge la question suivante
                        this.quizS.sendQuestion();
                        return [2 /*return*/];
                }
            });
        });
    };
    /* fonction pour activer ou reactiver les boutons */
    GamingPageComponent.prototype.activOuDesactiveButtons = function (buttons) {
        this.sontDesactives.set(!this.sontDesactives());
        if (this.sontDesactives()) {
            for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
                var button = buttons_1[_i];
                var button_ = button;
                button_.disabled = false;
            }
        }
        else {
            for (var _a = 0, buttons_2 = buttons; _a < buttons_2.length; _a++) {
                var button = buttons_2[_a];
                var button_ = button;
                button_.disabled = true;
            }
        }
    };
    GamingPageComponent.prototype.questionSuivant = function (Button) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new Error('not implemented');
            });
        });
    };
    GamingPageComponent = __decorate([
        core_1.Component({
            selector: 'app-gaming-page',
            imports: [],
            templateUrl: './gaming-page.component.html',
            styleUrl: './gaming-page.component.css'
        })
    ], GamingPageComponent);
    return GamingPageComponent;
}());
exports["default"] = GamingPageComponent;
