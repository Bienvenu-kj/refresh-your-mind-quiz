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
var header_component_1 = require("../../header/header.component");
var music_sound_manager_service_1 = require("../../../Services/music-sound-manager.service");
var HomeContentComponent = /** @class */ (function () {
    function HomeContentComponent() {
        this.MsM = core_1.inject(music_sound_manager_service_1.MusicSoundManagerService);
        this.material_icon = false;
        this.home = true;
        // musicGame = document.getElementById('musicGame') as HTMLAudioElement;
        this.music_game_state = core_1.signal(false);
    }
    // souscription = this.MsM.music_game_state_observ.subscribe((etat) => {
    //   this.music_game_state.set(etat);
    // });
    // SetsoundGameOnOff(): void {
    //   this.MsM.SetMusicGameOnOff();
    // }
    HomeContentComponent.prototype.ngOnInit = function () {
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
    HomeContentComponent = __decorate([
        core_1.Component({
            selector: 'app-home-content',
            imports: [header_component_1.HeaderComponent, router_1.RouterLink],
            templateUrl: './home-content.component.html',
            styleUrl: './home-content.component.css'
        })
    ], HomeContentComponent);
    return HomeContentComponent;
}());
exports["default"] = HomeContentComponent;
