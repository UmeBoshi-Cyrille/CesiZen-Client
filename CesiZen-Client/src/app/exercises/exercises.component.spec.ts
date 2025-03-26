import { TestBed } from '@angular/core/testing';
import { ExercisesComponent } from './exercises.component';

describe('ExercisesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercisesComponent],
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ExercisesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

