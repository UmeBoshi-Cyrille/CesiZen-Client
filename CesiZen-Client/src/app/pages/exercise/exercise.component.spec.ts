import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseComponent } from './exercise.component';
import { provideHttpClient } from '@angular/common/http';

describe('ExerciseComponent', () => {
  let component: ExerciseComponent;
  let fixture: ComponentFixture<ExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseComponent],
      providers: [
        provideHttpClient(), // Provide HttpClient
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
