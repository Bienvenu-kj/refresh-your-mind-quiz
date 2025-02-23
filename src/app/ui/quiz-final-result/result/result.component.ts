import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { QuizService } from '../../../Services/quiz.service';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-result',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
})
export default class ResultComponent {
  quizS = inject(QuizService);
  router = inject(Router);
  expeted_score = this.quizS.expetedScore();

  resultPageRedirection(route: string) {
    this.quizS.reset();
    this.router.navigate([route]);
  }
}
