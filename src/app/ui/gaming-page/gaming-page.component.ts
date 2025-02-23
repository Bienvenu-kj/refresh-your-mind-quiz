import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { QuizService } from '../../Services/quiz.service';
import { Subscription } from 'rxjs';
import { Question } from '../../core/models/model';

@Component({
  selector: 'app-gaming-page',
  imports: [],
  templateUrl: './gaming-page.component.html',
  styleUrl: './gaming-page.component.css',
})
export default class GamingPageComponent implements OnInit, OnDestroy {
  quizS = inject(QuizService);

  // abonnées
  subscription_question!: Subscription;
  subscription_score!: Subscription;
  subscription_vies!: Subscription;
  // fin abonnées

  question!: Question;

  // signales pour differents états
  score = signal(0);
  vies = signal(5);
  ChoiceAlreadyDone = signal(false);
  thereIsWrongChoice = signal(false);
  sontDesactives = signal(true);
  // fin signales

  buttons = document.getElementsByClassName('choice_button');

  ngOnInit(): void {
    this.quizS.getQuestions();

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

    // fin abonnments
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
    const Button_via_event = event.target as HTMLButtonElement;
    const rightAnswer = question.answer;
    // on anime le button cliqué en attende de validation
    Button.classList.toggle('onChoose-answer');

    this.ChoiceAlreadyDone.set(true);

    // on attend pendant 2s avant de desactiver les boutons et poursuivres avec les autres operations /;
    await this.quizS.attendrePendant(2000);

    // desactivation des buttons /;
    this.activOuDesactiveButtons(this.buttons);

    // signalement d'une bonne ou mauvaise reponse
    if (choix === question.answer) {
      Button_via_event.classList.toggle('good-answer');
      // on attend apres 2.5s avant de mettre à jour le score /;
      await this.quizS.attendrePendant(3500);
      this.quizS.upDateScore(true);
    } else {
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

    // on active les boutons apres la validation de la reponse
    this.activOuDesactiveButtons(this.buttons);

    // on change l'etat de tous les propriété et classes qui gerent l'etat de boutons
    this.ChoiceAlreadyDone.set(false);
    this.thereIsWrongChoice.set(false);
    Button_via_event.classList.remove('wrong-answer');
    Button_via_event.classList.remove('good-answer');
    Button.classList.remove('onChoose-answer');
    // on charge la question suivante
    this.quizS.sendQuestion();
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
  async questionSuivant(Button: HTMLButtonElement) {
    throw new Error('not implemented');
  }
}
