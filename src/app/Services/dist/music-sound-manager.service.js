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
var rxjs_1 = require("rxjs");
var MusicSoundManagerService = /** @class */ (function () {
    function MusicSoundManagerService() {
        //ici on veut gerer le son de clique de boutons
        this.clickSound = new Audio();
        this.sounds = {
            src: {
                normal: 'audios/sounds/normal/button-4-214382.mp3',
                menu: '',
                volum_up: '',
                volum_down: '',
                succed: '',
                fail: '',
                win: '',
                gameOver: ''
            }
        };
        // ces 9 lignes qui suivents concernent uniquement la mise en place et la gestion de la musique pour le jeux
        this.music_game_state = core_1.signal(false);
        this.music_game_state_subject = new rxjs_1.BehaviorSubject(false);
        this.music_game_state_observ = this.music_game_state_subject.asObservable();
        this.clickSound.src = this.sounds.src.normal;
        this.clickSound.load();
    }
    MusicSoundManagerService.prototype.SetButtonSound = function () {
        this.clickSound.currentTime = 0;
        this.clickSound.play();
    };
    MusicSoundManagerService.prototype.SetMusicGameOnOff = function () {
        this.music_game_state.set(!this.music_game_state());
        this.music_game_state_subject.next(this.music_game_state());
    };
    MusicSoundManagerService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MusicSoundManagerService);
    return MusicSoundManagerService;
}());
exports.MusicSoundManagerService = MusicSoundManagerService;
