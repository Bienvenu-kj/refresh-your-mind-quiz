"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var music_sound_manager_service_1 = require("./Services/music-sound-manager.service");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Refresh Your Mind - Quiz Informatique';
        this.MsM = core_1.inject(music_sound_manager_service_1.MusicSoundManagerService);
        this.audio = new Audio();
        // Dans ces 3 linges qui suivent ce commentaire : nous creons un element audio, un souscripteur et un signale et
        // on gere la logique de recevoir les valeurs emises par l'obsrvable et ainsi decider de lire ou stopper la music du jeux dans la methode OnIt()
        this.musicGame = new Audio('audios/musics/ambiance-relax-observation-1-12689.mp3');
        this.musicGamestate = core_1.signal(false);
    }
    // Dans les 7 lignes suivantes, nous mettons une ecouteur globales pour tous nos boutons
    AppComponent.prototype.onClique = function (event) {
        var target = event.target;
        if (target.classList.contains('normal_button')) {
            this.MsM.SetNormalButtonSound();
        }
        else if (target.classList.contains('navigation_button')) {
            this.MsM.SetNavigationButtonSound();
        }
    };
    AppComponent.prototype.onMouseOver = function (event) {
        var target = event.target;
        var target_style = target.style;
        if (window.innerWidth > 768) {
            if (target.tagName == 'BUTTON' &&
                !target.classList.contains('onChoose-answer') &&
                !target.classList.contains('result-det-btn') &&
                !target.classList.contains('wrong-answer') &&
                !target.classList.contains('good-answer')) {
                target_style.transition = '0.5s ease-in-out';
                target_style.transform = 'translateX(-1.3%)';
                target_style.boxShadow = '0px 1px 2px #ffd166';
            }
            else if (target.classList.contains('btn_message')) {
                var targetParent = target.parentElement;
                targetParent.style.transition = '0.5s ease-in-out';
                targetParent.style.transform = 'translateX(-1.3%)';
                targetParent.style.boxShadow = '0px 1px 2px #ffd166';
            }
        }
    };
    AppComponent.prototype.onMouseUp = function (event) {
        var target = event.target;
        var target_style = target.style;
        if (target.tagName === 'BUTTON') {
            target_style.transition = '0.5s ease-in-out';
            target_style.transform = '';
            target_style.boxShadow = '';
        }
        else if (target.classList.contains('btn_message')) {
            var targetParent = target.parentElement.style;
            targetParent.transition = '0.5s ease-in-out';
            targetParent.transform = '';
            targetParent.boxShadow = '';
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        // soundGamestate.set(this.MsM.sound_Game_state());
        // this.souscription = this.MsM.music_game_state_observ.subscribe({
        //   next: (valeur) => this.musicGamestate.set(valeur),
        // });
        // this.souscription = this.MsM.music_game_state_observ.subscribe((etat) => {
        //   this.musicGamestate.set(etat);
        // });
        this.musicGame.load();
        // this.souscription = this.MsM.music_game_state_observ.subscribe({
        //   next: (etat) => {
        //     this.musicGamestate.set(etat);
        //     this.musicGamestate() ? this.musicGame.play() : this.musicGame.pause(),
        //       (this.musicGame.currentTime = 0);
        //   },
        // });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.souscription.unsubscribe();
    };
    __decorate([
        core_1.HostListener('click', ['$event'])
    ], AppComponent.prototype, "onClique");
    __decorate([
        core_1.HostListener('mouseover', ['$event'])
    ], AppComponent.prototype, "onMouseOver");
    __decorate([
        core_1.HostListener('mouseout', ['$event'])
    ], AppComponent.prototype, "onMouseUp");
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            imports: [router_1.RouterOutlet],
            templateUrl: './app.component.html',
            styleUrl: './app.component.css'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
