import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MusicSoundManagerService {
  //ici on veut gerer le son de clique de boutons
  clickSound = new Audio();
  sounds = {
    src: {
      normal: 'audios/sounds/normal/button-4-214382.mp3',
      menu: '',
      volum_up: '',
      volum_down: '',
      succed: '',
      fail: '',
      win: '',
      gameOver: '',
    },
  };
  constructor() {
    this.clickSound.src = this.sounds.src.normal;
    this.clickSound.load();
  }

  SetButtonSound() {
    this.clickSound.currentTime = 0;
    this.clickSound.play();
  }

  // ces 9 lignes qui suivents concernent uniquement la mise en place et la gestion de la musique pour le jeux
  music_game_state = signal(false);
  private music_game_state_subject = new BehaviorSubject<boolean>(false);
  music_game_state_observ = this.music_game_state_subject.asObservable();

  SetMusicGameOnOff() {
    this.music_game_state.set(!this.music_game_state());
    this.music_game_state_subject.next(this.music_game_state());
  }

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
