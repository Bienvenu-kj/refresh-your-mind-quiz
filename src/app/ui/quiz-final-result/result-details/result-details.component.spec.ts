import { ComponentFixture, TestBed } from '@angular/core/testing';

import ResultDetailsComponent from './result-details.component';

describe('ResultDetailsComponent', () => {
  let component: ResultDetailsComponent;
  let fixture: ComponentFixture<ResultDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
