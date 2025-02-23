import { Component, inject, OnInit } from '@angular/core';
import { QuizService } from '../../../Services/quiz.service';
import { DetailsResult } from '../../../core/models/model';
import { Subscribable, Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-result-details',
  imports: [RouterLink],
  templateUrl: './result-details.component.html',
  styleUrl: './result-details.component.css',
})
export default class ResultDetailsComponent implements OnInit {
  quizS = inject(QuizService);
  Questions_done_sub!: Subscription;
  questions_done: DetailsResult[] = [];
  questions_doneSucced: DetailsResult[] = [];
  ngOnInit(): void {
    this.quizS.questions_done_obs.subscribe({
      next: (questions_done_) => {
        this.questions_done = questions_done_;
        this.questions_doneSucced = this.questions_done.filter(
          (question) => question.userAnswer === question.rightAnswer
        );
      },
    });
  }
}
