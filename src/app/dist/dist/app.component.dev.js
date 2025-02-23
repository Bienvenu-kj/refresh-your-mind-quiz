"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;
exports.AppComponent = void 0;

var core_1 = require("@angular/core");

var router_1 = require("@angular/router");

var music_sound_manager_service_1 = require("./Services/music-sound-manager.service");

var AppComponent =
/** @class */
function () {
  function AppComponent() {
    this.title = 'ng_refresh_your_mind_quiz_app';
    this.MsM = core_1.inject(music_sound_manager_service_1.MusicSoundManagerService);
    this.audio = new Audio(); // Dans ces 3 linges qui suivent ce commentaire : nous creons un element audio, un souscripteur et un signale et
    // on gere la logique de recevoir les valeurs emises par l'obsrvable et ainsi decider de lire ou stopper la music du jeux dans la methode OnIt()

    this.musicGame = new Audio('audios/musics/ambiance-relax-observation-1-12689.mp3');
    this.musicGamestate = core_1.signal(false);
  } //Dans les 7 lignes suivantes, nous mettons une ecouteur globales pour tous nos boutons


  AppComponent.prototype.onClique = function (event) {
    var target = event.target;

    if (target.tagName == 'BUTTON') {
      this.MsM.SetButtonSound();
    }
  };

  AppComponent.prototype.onMouseOver = function (event) {
    var target = event.target;

    if (target.tagName == 'BUTTON') {
      target.style.transition = '1s ease-in-out';
      target.style.boxShadow = '1px 1px 20px #ffd166';
    }
  };

  AppComponent.prototype.onMouseUp = function (event) {
    var target = event.target;

    if (target.tagName === 'BUTTON') {
      if (target.classList.contains('no-out_anim')) {
        target.style.transition = '1s ease-in-out';
        target.style.boxShadow = '';
      } else {
        target.style.transition = '1s ease-in-out';
        target.style.boxShadow = '1px 1px 20px #ffd166 inset';
      }
    }
  };

  AppComponent.prototype.ngOnInit = function () {
    // soundGamestate.set(this.MsM.sound_Game_state());
    // this.souscription = this.MsM.music_game_state_observ.subscribe({
    //   next: (valeur) => this.musicGamestate.set(valeur),
    // });
    var _this = this; // this.souscription = this.MsM.music_game_state_observ.subscribe((etat) => {
    //   this.musicGamestate.set(etat);
    // });


    this.musicGame.load();
    this.souscription = this.MsM.music_game_state_observ.subscribe({
      next: function next(etat) {
        _this.musicGamestate.set(etat);

        _this.musicGamestate() ? _this.musicGame.play() : _this.musicGame.pause(), _this.musicGame.currentTime = 0;
      }
    });
  };

  AppComponent.prototype.ngOnDestroy = function () {
    this.souscription.unsubscribe();
  };

  __decorate([core_1.HostListener('click', ['$event'])], AppComponent.prototype, "onClique");

  __decorate([core_1.HostListener('mouseover', ['$event'])], AppComponent.prototype, "onMouseOver");

  __decorate([core_1.HostListener('mouseout', ['$event'])], AppComponent.prototype, "onMouseUp");

  AppComponent = __decorate([core_1.Component({
    selector: 'app-root',
    imports: [router_1.RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })], AppComponent);
  return AppComponent;
}();

exports.AppComponent = AppComponent;