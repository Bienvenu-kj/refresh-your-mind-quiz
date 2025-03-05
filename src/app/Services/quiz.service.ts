import { Injectable, OnInit, signal } from '@angular/core';
import { DetailsResult, Question } from '../core/models/model';
import { BehaviorSubject, from, Observable, of, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class QuizService implements OnInit {
  constructor(private router: Router) {}

  expetedScore = signal(100);
  questions_done: DetailsResult[] = [];
  questions_done_obs = new Observable<DetailsResult[]>();
  id = signal(0); /* le conteur permettant de charger la question suivante */
  material_icon = new BehaviorSubject<boolean>(false);
  score_ = signal(0);
  score = new BehaviorSubject<number>(this.score_());

  vies_ = signal(5);
  vies = new BehaviorSubject<number>(this.vies_());

  questions: Question[] = [{ id: 0, question: '', choices: [''], answer: '' }]; // initialisation des questions

  /* Création de l'observable privé pour le service permettant d'emettre la question */
  private question_behavior_sub = new BehaviorSubject<Question>(
    this.questions[0]
  );

  /* l'observable public se ressourçant au premier */
  question_observ = this.question_behavior_sub.asObservable();

  /* cette fonction charge les questions */
  getQuestions = async () => {
    try {
      let donnees = await fetch('questions.json'); //Recuperation des données
      let donneeJson: Question[] = await donnees.json(); //Conversion des données en format json
      this.questions = donneeJson;
      this.question_behavior_sub.next(this.questions[0]);
    } catch (error) {
      console.error('error lors de recuperation de données : ', error);
    }
  };

  /*  Pour envoyer la question suivante */
  sendQuestion() {
    this.id.update((value) => value + 1);
    if (this.id() < this.questions.length && this.vies_() >= 1) {
      return this.question_behavior_sub.next(this.questions[this.id()]);
    } else {
      this.questions_done_obs = of(this.questions_done);
      this.router.navigate(['quiz-final-result']);
    }
  }

  upDateLife() {
    this.vies_.update((lifes) => lifes - 1);
    this.vies.next(this.vies_());
  }

  upDateScore(succeed: boolean) {
    if (succeed) {
      this.score_.update((scores) => scores + 10);
      this.score.next(this.score_());
    } else {
      this.score_() <= 0
        ? this.score_.set(0)
        : this.score_.update((scores) => scores - 10);
      this.score.next(this.score_());
    }
  }
  putQuestionDone(
    question: Question,
    userAnswer: string,
    right_answer: string
  ) {
    this.questions_done.push({
      question: question,
      userAnswer: userAnswer,
      rightAnswer: right_answer,
    });
  }

  reset() {
    this.questions_done = [];
    this.question_behavior_sub.next(this.questions[0]);
    this.id.set(0);
    this.score_.set(0);
    this.vies_.set(5);
    this.score.next(this.score_());
    this.vies.next(this.vies_());
  }

  attendrePendant(temps: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, temps);
    });
  }

  ngOnInit(): void {
    fetch('https://fonts.googleapis.com/icon?family=Material+Icons')
      .then((response) => {
        if (response.ok) {
          this.material_icon.next(true);
          console.log('Tout va bien, les icons sont prets', response);
        }
        throw new Error(`Erreur lors de la requette ${response.status}`);
      })
      .catch((error) => {
        console.log(error);
        this.material_icon.next(false);
      });
  }
}
