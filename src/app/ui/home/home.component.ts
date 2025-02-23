import {
  Component,
  computed,
  inject,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MusicSoundManagerService } from '../../Services/music-sound-manager.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent implements OnInit {
  MsM = inject(MusicSoundManagerService);
  material_icon = false;
  // musicGame = document.getElementById('musicGame') as HTMLAudioElement;
  music_game_state = signal(false);

  souscription = this.MsM.music_game_state_observ.subscribe((etat) => {
    this.music_game_state.set(etat);
  });

  SetsoundGameOnOff(): void {
    this.MsM.SetMusicGameOnOff();
  }
  ngOnInit() {
    fetch('https://fonts.googleapis.com/icon?family=Material+Icons')
      .then((response) => {
        if (response.ok) {
          this.material_icon = true;
          console.log('Tout va bien, les icons sont prets', response);
        }
        throw new Error(`Erreur lors de la requette ${response.status}`);
      })
      .catch((error) => {
        console.log(error);
        this.material_icon = false;
      });
  }
}
