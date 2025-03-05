import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { QuizService } from '../../../Services/quiz.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MusicSoundManagerService } from '../../../Services/music-sound-manager.service';
@Component({
  selector: 'app-result',
  imports: [AsyncPipe, CommonModule, RouterLink],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
})
export default class ResultComponent implements OnInit {
  public quizS = inject(QuizService);
  private MsM = inject(MusicSoundManagerService);
  router = inject(Router);

  expeted_score = this.quizS.expetedScore();
  score = this.quizS.score_();
  personnels_messages = {
    '0-40': `Oups... Vous pouvez faire mieux ! Revisez et reesayez !`,
    '50-70': `Pas mal ! Mais encore un peu d'effort et ça sera parfait !`,
    '80-90': 'Bravo, Vous êtes sur la bonne voie ! !',
    '100': 'Félicitations! Score parfait, vous êtes un expert ! ',
  };

  personnel_message = '';
  personnel_message_color = '';
  personnel_color = '';
  btn_icons = ['replay', 'home'];
  personel_message_icon = '';
  resultPageRedirection(route: string) {
    this.router.navigate([route]);
  }
  redirectionOuPartagerScore(button_text: string) {
    switch (button_text.toLowerCase()) {
      case 'rejouer !':
        this.quizS.reset();
        this.router.navigate(['gaming']);
        break;
      case 'partager mon score !':
        console.log(
          'Vous aurez la possibilité de partager votre score dans les mise à jours qui vient !'
        );
        break;
      case 'accueil':
        this.quizS.reset();
        this.router.navigate(['home']);
        break;
    }
  }
  ngOnInit(): void {
    if (this.score <= 40) {
      this.personnel_message = this.personnels_messages['0-40'];
      this.personel_message_icon = 'cancel';
      this.personnel_message_color = 'text-red-400';
      this.personnel_color = 'bg-red-400';
      console.log(this.personnel_color);
    } else if (this.score >= 50 && this.score <= 70) {
      this.personnel_message = this.personnels_messages['50-70'];
      this.personel_message_icon = 'sync';
      this.personnel_message_color = 'text-orange-500';
      this.personnel_color = 'bg-orange-500';
    } else if (this.score >= 80 && this.score <= 90) {
      this.personnel_message = this.personnels_messages['80-90'];
      this.personel_message_icon = 'check_circle';
      this.personnel_message_color = 'text-green-500';
      this.personnel_color = 'bg-green-500';
    } else if (this.score === 100) {
      this.personnel_message = this.personnels_messages['100'];
      this.personel_message_icon = 'emoji_events';
      this.personnel_message_color = 'text-green-500';
      this.personnel_color = 'bg-green-500';
    }

    if (this.score <= 40){
      this.MsM.SetOnGameOverSound();
    }
    if (this.score >=  50){
      this.MsM.SetOnWinGameSound();
    }
  }
}
