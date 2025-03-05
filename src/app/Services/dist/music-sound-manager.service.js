"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MusicSoundManagerService = void 0;
var core_1 = require("@angular/core");
var MusicSoundManagerService = /** @class */ (function () {
    function MusicSoundManagerService() {
        //ici on veut gerer le son de clique de boutons
        this.normalButton = new Audio();
        this.navigationButton = new Audio();
        this.onChooseAnswer = new Audio();
        this.onGoodAnswer = new Audio();
        this.onWrongAnswer = new Audio();
        this.onWinGame = new Audio();
        this.OnGameOver = new Audio();
        this.sounds = {
            src: {
                normal: 'audios/sounds/normal/mouse-click-290204.mp3',
                menu: '',
                navigation: 'audios/sounds/navigation_sound/ui-navigation-sound-270299.mp3',
                volum_up: '',
                volum_down: '',
                onChooseAnswer: 'audios/sounds/onChoose/greanpatch-166007.mp3',
                onFailAnswer: 'audios/sounds/onFail/fail-234710.mp3',
                onSuccessAnswer: 'audios/sounds/onSuccess/success-2219351.mp3',
                win: 'audios/sounds/win/success-fanfare-trumpets-6185.mp3',
                gameOver: 'audios/sounds/gameOver/game-win-360821.mp3'
            }
        };
        this.onWinGame.src = this.sounds.src.win;
        this.OnGameOver.src = this.sounds.src.gameOver;
        this.onGoodAnswer.src = this.sounds.src.onSuccessAnswer;
        this.onWrongAnswer.src = this.sounds.src.onFailAnswer;
        this.navigationButton.src = this.sounds.src.navigation;
        this.onChooseAnswer.src = this.sounds.src.onChooseAnswer;
        this.normalButton.src = this.sounds.src.normal;
        this.navigationButton.load();
        this.normalButton.load();
        this.onChooseAnswer.load();
        this.onGoodAnswer.load();
        this.onWrongAnswer.load();
        this.onWinGame.load();
        this.OnGameOver.load();
    }
    MusicSoundManagerService.prototype.SetNormalButtonSound = function () {
        this.normalButton.currentTime = 0;
        this.normalButton.play();
    };
    MusicSoundManagerService.prototype.SetNavigationButtonSound = function () {
        this.navigationButton.play();
    };
    MusicSoundManagerService.prototype.SetonChooseAnswerSound = function () {
        this.onChooseAnswer.play();
    };
    MusicSoundManagerService.prototype.SetonGoodAnswerSound = function () {
        this.onGoodAnswer.play();
    };
    MusicSoundManagerService.prototype.SetonWrongAnswerSound = function () {
        this.onWrongAnswer.play();
    };
    MusicSoundManagerService.prototype.SetOnWinGameSound = function () {
        this.onWinGame.play();
    };
    MusicSoundManagerService.prototype.SetOnGameOverSound = function () {
        this.OnGameOver.play();
    };
    MusicSoundManagerService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MusicSoundManagerService);
    return MusicSoundManagerService;
}());
exports.MusicSoundManagerService = MusicSoundManagerService;
