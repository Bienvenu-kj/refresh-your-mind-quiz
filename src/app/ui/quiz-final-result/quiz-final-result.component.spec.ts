import { ComponentFixture, TestBed } from '@angular/core/testing';

import QuizFinalResultComponent from './quiz-final-result.component';

describe('QuizFinalResultComponent', () => {
  let component: QuizFinalResultComponent;
  let fixture: ComponentFixture<QuizFinalResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizFinalResultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizFinalResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
