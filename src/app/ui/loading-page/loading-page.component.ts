import { Component, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-page',
  imports: [HeaderComponent],
  templateUrl: './loading-page.component.html',
  styleUrl: './loading-page.component.css',
})
export default class LoadingPageComponent implements OnInit {
  router = inject(Router);
  w_progress = signal<string>('');
  progress_counter = signal<string>('');

  attendre(time: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }
  i = 0;
  fin = 100;
  isLoading = true;
  async progresser() {
    if (this.i <= this.fin) {
      this.w_progress.set(`width:${this.i}%`);
      this.progress_counter.set(`${this.i}`);
      if (this.i == 99) {
        this.w_progress.set(`width:${this.i + 1}%`);
        this.progress_counter.set(`${this.i + 1}`);
      }
      this.i += 3;
      await this.attendre(177);
      this.progresser();
    } else {
      this.router.navigate(['home']);
    }
  }

  ngOnInit(): void {
    this.progresser();
  }
}
