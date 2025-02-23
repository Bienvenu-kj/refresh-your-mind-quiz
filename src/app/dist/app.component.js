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
        this.title = 'ng_refresh_your_mind_quiz_app';
        this.MsM = core_1.inject(music_sound_manager_service_1.MusicSoundManagerService);
        this.audio = new Audio();
        // Dans ces 3 linges qui suivent ce commentaire : nous creons un element audio, un souscripteur et un signale et
        // on gere la logique de recevoir les valeurs emises par l'obsrvable et ainsi decider de lire ou stopper la music du jeux dans la methode OnIt()
        this.musicGame = new Audio('audios/musics/ambiance-relax-observation-1-12689.mp3');
        this.musicGamestate = core_1.signal(false);
    }
    //Dans les 7 lignes suivantes, nous mettons une ecouteur globales pour tous nos boutons
    // @HostListener('click', ['$event'])
    // onClique(event: Event) {
    //   const target = event.target as HTMLElement;
    //   if (target.tagName == 'BUTTON') {
    //     this.MsM.SetButtonSound();
    //   }
    // }
    AppComponent.prototype.onMouseOver = function (event) {
        var target = event.target;
        var target_style = target.style;
        if (target.tagName == 'BUTTON') {
            target_style.transition = '0.6s ease-in-out';
            target_style.transform = 'translateX(-2%)';
            target_style.boxShadow = '1px 1px 20px #ffd166';
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
