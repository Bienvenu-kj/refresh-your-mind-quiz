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
exports.QuizService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var QuizService = /** @class */ (function () {
    function QuizService(router) {
        var _this = this;
        this.router = router;
        this.expetedScore = core_1.signal(100);
        this.questions_done = [];
        this.questions_done_obs = new rxjs_1.Observable();
        this.id = core_1.signal(0); /* le conteur permettant de charger la question suivante */
        this.material_icon = new rxjs_1.BehaviorSubject(false);
        this.score_ = core_1.signal(0);
        this.score = new rxjs_1.BehaviorSubject(this.score_());
        this.vies_ = core_1.signal(5);
        this.vies = new rxjs_1.BehaviorSubject(this.vies_());
        this.questions = [{ id: 0, question: '', choices: [''], answer: '' }]; // initialisation des questions
        /* Création de l'observable privé pour le service permettant d'emettre la question */
        this.question_behavior_sub = new rxjs_1.BehaviorSubject(this.questions[0]);
        /* l'observable public se ressourçant au premier */
        this.question_observ = this.question_behavior_sub.asObservable();
        /* cette fonction charge les questions */
        this.getQuestions = function () { return __awaiter(_this, void 0, void 0, function () {
            var donnees, donneeJson, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch('questions.json')];
                    case 1:
                        donnees = _a.sent();
                        return [4 /*yield*/, donnees.json()];
                    case 2:
                        donneeJson = _a.sent();
                        this.questions = donneeJson;
                        this.question_behavior_sub.next(this.questions[0]);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error('error lors de recuperation de données : ', error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
    }
    /*  Pour envoyer la question suivante */
    QuizService.prototype.sendQuestion = function () {
        this.id.update(function (value) { return value + 1; });
        if (this.id() < this.questions.length && this.vies_() >= 1) {
            return this.question_behavior_sub.next(this.questions[this.id()]);
        }
        else {
            this.questions_done_obs = rxjs_1.of(this.questions_done);
            this.router.navigate(['quiz-final-result']);
        }
    };
    QuizService.prototype.upDateLife = function () {
        this.vies_.update(function (lifes) { return lifes - 1; });
        this.vies.next(this.vies_());
    };
    QuizService.prototype.upDateScore = function (succeed) {
        if (succeed) {
            this.score_.update(function (scores) { return scores + 10; });
            this.score.next(this.score_());
        }
        else {
            this.score_() <= 0
                ? this.score_.set(0)
                : this.score_.update(function (scores) { return scores - 10; });
            this.score.next(this.score_());
        }
    };
    QuizService.prototype.putQuestionDone = function (question, userAnswer, right_answer) {
        this.questions_done.push({
            question: question,
            userAnswer: userAnswer,
            rightAnswer: right_answer
        });
    };
    QuizService.prototype.reset = function () {
        this.questions_done = [];
        this.question_behavior_sub.next(this.questions[0]);
        this.id.set(0);
        this.score_.set(0);
        this.vies_.set(5);
        this.score.next(this.score_());
        this.vies.next(this.vies_());
    };
    QuizService.prototype.attendrePendant = function (temps) {
        return new Promise(function (resolve) {
            setTimeout(resolve, temps);
        });
    };
    QuizService.prototype.ngOnInit = function () {
        var _this = this;
        fetch('https://fonts.googleapis.com/icon?family=Material+Icons')
            .then(function (response) {
            if (response.ok) {
                _this.material_icon.next(true);
                console.log('Tout va bien, les icons sont prets', response);
            }
            throw new Error("Erreur lors de la requette " + response.status);
        })["catch"](function (error) {
            console.log(error);
            _this.material_icon.next(false);
        });
    };
    QuizService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], QuizService);
    return QuizService;
}());
exports.QuizService = QuizService;
