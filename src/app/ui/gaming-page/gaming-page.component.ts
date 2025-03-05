import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { QuizService } from '../../Services/quiz.service';
import { Subscription } from 'rxjs';
import { Question } from '../../core/models/model';
import { Router, RouterLink } from '@angular/router';
import {
  state,
  trigger,
  transition,
  animate,
  style,
  keyframes,
} from '@angular/animations';
import { MusicSoundManagerService } from '../../Services/music-sound-manager.service';

@Component({
  selector: 'app-gaming-page',
  imports: [],
  templateUrl: './gaming-page.component.html',
  styleUrl: './gaming-page.component.css',
  animations: [
    trigger('DispApparition', [
      state(
        'apparition',
        style({
          opacity: 1,
        })
      ),
      state(
        'disparition',
        style({
          opacity: 0,
        })
      ),
      transition(
        'apparition => disparition',
        animate('3s ease-in-out', style({ opacity: 0 }))
      ),

      transition('disparition => apparition', animate('2.5s ease-in-out')),
    ]),
  ],
})
export default class GamingPageComponent implements OnInit, OnDestroy {
  quizS = inject(QuizService);
  MsM = inject(MusicSoundManagerService);
  router = inject(Router);
  // abonnées
  subscription_question!: Subscription;
  subscription_score!: Subscription;
  subscription_vies!: Subscription;
  subscription_material_icon!: Subscription;
  // fin abonnées

  question!: Question;

  // signales pour differents états
  onVeutQuitter = signal(false);
  score = signal(0);
  vies = signal(5);
  apparaitre = signal(true);
  chargement = signal(true);
  ChoiceAlreadyDone = signal(false);
  thereIsWrongChoice = signal(false);
  sontDesactives = signal(true);
  material_icon = signal(true);
  // fin signales

  buttons = document.getElementsByClassName('choice_button');

  ngOnInit(): void {
    this.quizS.getQuestions(); // chargement de la toute première question

    // abonnements
    this.subscription_question = this.quizS.question_observ.subscribe({
      next: (question) => {
        this.question = question;
      },
    });
    this.subscription_score = this.quizS.score.subscribe({
      next: (score) => {
        this.score.set(score);
      },
    });
    this.subscription_vies = this.quizS.vies.subscribe({
      next: (vies) => {
        this.vies.set(vies);
      },
    });
    this.subscription_material_icon = this.quizS.material_icon.subscribe({
      next: (icon_charge_ou_pas) => {
        this.material_icon.set(icon_charge_ou_pas);
        console.log(icon_charge_ou_pas);
      },
    });
    // fin abonnments
  }

  // pour animer l'apparition de nouvelle en douceur de nouvelles questions
  toggle() {
    this.apparaitre.set(!this.apparaitre());
  }

  ngOnDestroy(): void {
    this.subscription_question.unsubscribe();
  }

  // Button pour valider la reponse
  async validerReponse(
    event: Event,
    Button: HTMLButtonElement,
    choix: string,
    question: Question
  ) {
    const target = event.target as HTMLElement;
    const Button_via_event = target.classList.contains('btn_message')
      ? (target.parentElement as HTMLElement)
      : (target as HTMLButtonElement);

    const rightAnswer = question.answer;
    // on anime le button cliqué en attende de validation
    Button.classList.toggle('onChoose-answer');
    this.MsM.SetonChooseAnswerSound(); // son pour materialiser le choix d'une reponse

    this.ChoiceAlreadyDone.set(true);

    // desactivation des buttons /;
    this.activOuDesactiveButtons(this.buttons);

    // on attend pendant 2s avant de poursuivres avec les autres operations /;
    await this.quizS.attendrePendant(2000);

    // signalement d'une bonne ou mauvaise reponse
    if (choix === question.answer) {
      this.MsM.SetonGoodAnswerSound(); //son pour materialiser la confirmation de la bonne reponse
      Button_via_event.classList.toggle('good-answer');
      // on attend apres 2.5s avant de mettre à jour le score /;
      await this.quizS.attendrePendant(3500);
      this.quizS.upDateScore(true);
    } else {
      this.MsM.SetonWrongAnswerSound(); //son pour materialiser la confirmation de la mauvaise reponse
      Button_via_event.classList.toggle('wrong-answer');
      this.thereIsWrongChoice.set(true);
      // on attend après 2.5s avant de mettre à jour le score et les vies /;
      await this.quizS.attendrePendant(3500);
      this.quizS.upDateScore(false);
      this.quizS.upDateLife();
    }

    // on attend encore après 4s avant d'afficher les autres questions /;
    await this.quizS.attendrePendant(1500);

    //On envoie les questions repondues au service
    this.quizS.putQuestionDone(question, choix, rightAnswer);

    // on change l'etat de tous les propriété et classes qui gerent l'etat de boutons
    this.ChoiceAlreadyDone.set(false);
    this.thereIsWrongChoice.set(false);
    Button_via_event.classList.remove('wrong-answer');
    Button_via_event.classList.remove('good-answer');
    Button.classList.remove('onChoose-answer');
    this.toggle(); // on anime la disparition de la précedente question
    // on charge la question suivante
    await this.quizS.attendrePendant(2950);
    this.toggle(); // on anime l'apparition de la nouvelle question
    this.quizS.sendQuestion();
    // on active les boutons apres la validation de la reponse
    this.activOuDesactiveButtons(this.buttons);
  }

  /* fonction pour activer ou reactiver les boutons */
  activOuDesactiveButtons(buttons: HTMLCollectionOf<Element>) {
    this.sontDesactives.set(!this.sontDesactives());
    if (this.sontDesactives()) {
      for (let button of buttons) {
        let button_ = button as HTMLButtonElement;
        button_.disabled = false;
      }
    } else {
      for (let button of buttons) {
        let button_ = button as HTMLButtonElement;
        button_.disabled = true;
      }
    }
  }

  /* fontion qui renvoie l'utilisateur à la page d'acueil */
  async allerAl_accueil() {
    this.router.navigate(['home']);
    this.quizS.reset();
  }

  async questionSuivant(Button: HTMLButtonElement) {
    throw new Error('not implemented');
  }
}
