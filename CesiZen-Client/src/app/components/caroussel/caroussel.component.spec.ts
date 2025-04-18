import { TestBed } from '@angular/core/testing';
import { CarousselComponent } from './caroussel.component';

describe('CarousselComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarousselComponent],
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CarousselComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

