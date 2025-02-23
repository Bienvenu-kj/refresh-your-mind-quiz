import { Component, inject, OnInit } from '@angular/core';
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
  w_progress: string = '';
  progress_counter: string = '';

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
      this.w_progress = `width:${this.i}%`;
      this.progress_counter = `${this.i}`;
      if (this.i == 50 || this.i == 62) {
        await this.attendre(1000);
      }
      this.i++;
      await this.attendre(177);
      this.progresser();
    }
    if (this.i == 101) {
      this.router.navigate(['home']);
    }
  }
  ngOnInit(): void {
    this.progresser();
  }
}
