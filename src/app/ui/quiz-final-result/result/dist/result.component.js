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
var quiz_service_1 = require("../../../Services/quiz.service");
var common_1 = require("@angular/common");
var music_sound_manager_service_1 = require("../../../Services/music-sound-manager.service");
var ResultComponent = /** @class */ (function () {
    function ResultComponent() {
        this.quizS = core_1.inject(quiz_service_1.QuizService);
        this.MsM = core_1.inject(music_sound_manager_service_1.MusicSoundManagerService);
        this.router = core_1.inject(router_1.Router);
        this.expeted_score = this.quizS.expetedScore();
        this.score = this.quizS.score_();
        this.personnels_messages = {
            '0-40': "Oups... Vous pouvez faire mieux ! Revisez et reesayez !",
            '50-70': "Pas mal ! Mais encore un peu d'effort et \u00E7a sera parfait !",
            '80-90': 'Bravo, Vous êtes sur la bonne voie ! !',
            '100': 'Félicitations! Score parfait, vous êtes un expert ! '
        };
        this.personnel_message = '';
        this.personnel_message_color = '';
        this.personnel_color = '';
        this.btn_icons = ['replay', 'home'];
        this.personel_message_icon = '';
    }
    ResultComponent.prototype.resultPageRedirection = function (route) {
        this.router.navigate([route]);
    };
    ResultComponent.prototype.redirectionOuPartagerScore = function (button_text) {
        switch (button_text.toLowerCase()) {
            case 'rejouer !':
                this.quizS.reset();
                this.router.navigate(['gaming']);
                break;
            case 'partager mon score !':
                console.log('Vous aurez la possibilité de partager votre score dans les mise à jours qui vient !');
                break;
            case 'accueil':
                this.quizS.reset();
                this.router.navigate(['home']);
                break;
        }
    };
    ResultComponent.prototype.ngOnInit = function () {
        if (this.score <= 40) {
            this.personnel_message = this.personnels_messages['0-40'];
            this.personel_message_icon = 'cancel';
            this.personnel_message_color = 'text-red-400';
            this.personnel_color = 'bg-red-400';
            console.log(this.personnel_color);
        }
        else if (this.score >= 50 && this.score <= 70) {
            this.personnel_message = this.personnels_messages['50-70'];
            this.personel_message_icon = 'sync';
            this.personnel_message_color = 'text-orange-500';
            this.personnel_color = 'bg-orange-500';
        }
        else if (this.score >= 80 && this.score <= 90) {
            this.personnel_message = this.personnels_messages['80-90'];
            this.personel_message_icon = 'check_circle';
            this.personnel_message_color = 'text-green-500';
            this.personnel_color = 'bg-green-500';
        }
        else if (this.score === 100) {
            this.personnel_message = this.personnels_messages['100'];
            this.personel_message_icon = 'emoji_events';
            this.personnel_message_color = 'text-green-500';
            this.personnel_color = 'bg-green-500';
        }
        if (this.score <= 40) {
            this.MsM.SetOnGameOverSound();
        }
        if (this.score >= 50) {
            this.MsM.SetOnWinGameSound();
        }
    };
    ResultComponent = __decorate([
        core_1.Component({
            selector: 'app-result',
            imports: [common_1.AsyncPipe, common_1.CommonModule, router_1.RouterLink],
            templateUrl: './result.component.html',
            styleUrl: './result.component.css'
        })
    ], ResultComponent);
    return ResultComponent;
}());
exports["default"] = ResultComponent;
