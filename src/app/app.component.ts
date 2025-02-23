import {
  Component,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicSoundManagerService } from './Services/music-sound-manager.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ng_refresh_your_mind_quiz_app';
  MsM = inject(MusicSoundManagerService);
  audio = new Audio();

  //Dans les 7 lignes suivantes, nous mettons une ecouteur globales pour tous nos boutons
  // @HostListener('click', ['$event'])
  // onClique(event: Event) {
  //   const target = event.target as HTMLElement;
  //   if (target.tagName == 'BUTTON') {
  //     this.MsM.SetButtonSound();
  //   }
  // }

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: Event) {
    const target = event.target as HTMLElement;
    const target_style = target.style;
    if (target.tagName == 'BUTTON') {
      target_style.transition = '0.6s ease-in-out';
      target_style.transform = 'translateX(-2%)';
      target_style.boxShadow = '1px 1px 20px #ffd166';
    }
  }
  @HostListener('mouseout', ['$event'])
  onMouseUp(event: Event) {
    const target = event.target as HTMLElement;
    const target_style = target.style;
    if (target.tagName === 'BUTTON') {
      target_style.transition = '0.5s ease-in-out';
      target_style.transform = '';
      target_style.boxShadow = '';
    }
  }

  // Dans ces 3 linges qui suivent ce commentaire : nous creons un element audio, un souscripteur et un signale et
  // on gere la logique de recevoir les valeurs emises par l'obsrvable et ainsi decider de lire ou stopper la music du jeux dans la methode OnIt()
  musicGame = new Audio('audios/musics/ambiance-relax-observation-1-12689.mp3');

  souscription!: Subscription;
  musicGamestate = signal(false);
  ngOnInit(): void {
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
  }
  ngOnDestroy(): void {
    this.souscription.unsubscribe();
  }
}
