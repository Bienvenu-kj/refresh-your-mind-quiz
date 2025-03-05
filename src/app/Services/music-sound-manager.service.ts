import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MusicSoundManagerService {
  //ici on veut gerer le son de clique de boutons
  normalButton = new Audio();
  navigationButton = new Audio();
  onChooseAnswer = new Audio();
  onGoodAnswer = new Audio();
  onWrongAnswer = new Audio();

  onWinGame = new Audio();
  OnGameOver = new Audio();

  sounds = {
    src: {
      normal: 'audios/sounds/normal/mouse-click-290204.mp3',
      menu: '',
      navigation:
        'audios/sounds/navigation_sound/ui-navigation-sound-270299.mp3',
      volum_up: '',
      volum_down: '',
      onChooseAnswer: 'audios/sounds/onChoose/greanpatch-166007.mp3',
      onFailAnswer: 'audios/sounds/onFail/fail-234710.mp3',
      onSuccessAnswer: 'audios/sounds/onSuccess/success-2219351.mp3',
      win: 'audios/sounds/win/success-fanfare-trumpets-6185.mp3',
      gameOver: 'audios/sounds/gameOver/game-win-360821.mp3',
    },
  };
  constructor() {
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

  SetNormalButtonSound() {
    this.normalButton.currentTime = 0;
    this.normalButton.play();
  }

  SetNavigationButtonSound() {
    this.navigationButton.play();
  }

  SetonChooseAnswerSound() {
    this.onChooseAnswer.play();
  }
  SetonGoodAnswerSound() {
    this.onGoodAnswer.play();
  }
  SetonWrongAnswerSound() {
    this.onWrongAnswer.play();
  }
  SetOnWinGameSound() {
    this.onWinGame.play();
  }
  SetOnGameOverSound() {
    this.OnGameOver.play();
  }

  // ces 9 lignes qui suivents concernent uniquement la mise en place et la gestion de la musique pour le jeux
  // music_game_state = signal(false);
  // private music_game_state_subject = new BehaviorSubject<boolean>(false);
  // music_game_state_observ = this.music_game_state_subject.asObservable();

  // SetMusicGameOnOff() {
  //   this.music_game_state.set(!this.music_game_state());
  //   this.music_game_state_subject.next(this.music_game_state());
  // }

  // setSoundGameOnOff(): boolean {
  //   this.sound_Game_state.set(!this.sound_Game_state());
  //   this.sound_Game_state();
  //   return this.sound_Game_state();
  // }

  // SetsoundGameOnOff() {
  //   return this.sound_game_state2;
  // }
  // setSoundGameOnOff(): Observable<boolean> {
  //   this.sound_Game_state.set(!this.sound_Game_state());
  //   return new Observable((observer) => {
  //     observer.next(this.sound_Game_state());
  //     observer.complete();
  //   });
  // }
}
