import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Loading',
    loadComponent: () => import('./ui/loading-page/loading-page.component'),
    // canDeactivate: [() => true],
  },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./ui/home/home.component'),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./ui/home/home-content/home-content.component'),
      },
      {
        path: 'apropos',
        title:'apropos de',
        loadComponent: () =>
          import('./ui/home/apropos/apropos.component'),
      },
    ],
  },
  {
    path: 'gaming',
    title: 'Gaming',
    loadComponent: () => import('./ui/gaming-page/gaming-page.component'),
  },
  {
    path: 'quiz-final-result',
    title: 'Quiz final result',
    loadComponent: () =>
      import('./ui/quiz-final-result/quiz-final-result.component'),
    children: [
      {
        path: '',
        title: 'Quiz Results',
        loadComponent: () =>
          import('./ui/quiz-final-result/result/result.component'),
      },
      {
        path: 'result-details',
        title: 'Quiz Result details',
        loadComponent: () =>
          import(
            './ui/quiz-final-result/result-details/result-details.component'
          ),
      },
    ],
  },
];
