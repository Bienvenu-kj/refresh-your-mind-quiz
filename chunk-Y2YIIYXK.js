import{h as n}from"./chunk-7JDHDX52.js";var s=class o{normalButton=new Audio;navigationButton=new Audio;onChooseAnswer=new Audio;onGoodAnswer=new Audio;onWrongAnswer=new Audio;onWinGame=new Audio;OnGameOver=new Audio;sounds={src:{normal:"audios/sounds/normal/mouse-click-290204.mp3",menu:"",navigation:"audios/sounds/navigation_sound/ui-navigation-sound-270299.mp3",volum_up:"",volum_down:"",onChooseAnswer:"audios/sounds/onChoose/greanpatch-166007.mp3",onFailAnswer:"audios/sounds/onFail/fail-234710.mp3",onSuccessAnswer:"audios/sounds/onSuccess/success-2219351.mp3",win:"audios/sounds/win/success-fanfare-trumpets-6185.mp3",gameOver:"audios/sounds/gameOver/game-win-360821.mp3"}};constructor(){this.onWinGame.src=this.sounds.src.win,this.OnGameOver.src=this.sounds.src.gameOver,this.onGoodAnswer.src=this.sounds.src.onSuccessAnswer,this.onWrongAnswer.src=this.sounds.src.onFailAnswer,this.navigationButton.src=this.sounds.src.navigation,this.onChooseAnswer.src=this.sounds.src.onChooseAnswer,this.normalButton.src=this.sounds.src.normal,this.navigationButton.load(),this.normalButton.load(),this.onChooseAnswer.load(),this.onGoodAnswer.load(),this.onWrongAnswer.load(),this.onWinGame.load(),this.OnGameOver.load()}SetNormalButtonSound(){this.normalButton.currentTime=0,this.normalButton.play()}SetNavigationButtonSound(){this.navigationButton.play()}SetonChooseAnswerSound(){this.onChooseAnswer.play()}SetonGoodAnswerSound(){this.onGoodAnswer.play()}SetonWrongAnswerSound(){this.onWrongAnswer.play()}SetOnWinGameSound(){this.onWinGame.play()}SetOnGameOverSound(){this.OnGameOver.play()}static \u0275fac=function(e){return new(e||o)};static \u0275prov=n({token:o,factory:o.\u0275fac,providedIn:"root"})};export{s as a};
