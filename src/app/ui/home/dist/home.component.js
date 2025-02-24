"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var header_component_1 = require("../header/header.component");
var music_sound_manager_service_1 = require("../../Services/music-sound-manager.service");
var router_1 = require("@angular/router");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        var _this = this;
        this.MsM = core_1.inject(music_sound_manager_service_1.MusicSoundManagerService);
        this.material_icon = false;
        // musicGame = document.getElementById('musicGame') as HTMLAudioElement;
        this.music_game_state = core_1.signal(false);
        this.souscription = this.MsM.music_game_state_observ.subscribe(function (etat) {
            _this.music_game_state.set(etat);
        });
    }
    HomeComponent.prototype.SetsoundGameOnOff = function () {
        this.MsM.SetMusicGameOnOff();
    };
    HomeComponent.prototype.ngOnInit = function () {
        // fetch('https://fonts.googleapis.com/icon?family=Material+Icons')
        //   .then((response) => {
        //     if (response.ok) {
        //       this.material_icon = true;
        //       console.log('Tout va bien, les icons sont prets', response);
        //     }
        //     throw new Error(`Erreur lors de la requette ${response.status}`);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //     this.material_icon = false;
        //   });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            imports: [header_component_1.HeaderComponent, router_1.RouterLink],
            templateUrl: './home.component.html',
            styleUrl: './home.component.css'
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports["default"] = HomeComponent;
