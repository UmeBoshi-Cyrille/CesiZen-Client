import { TestBed } from '@angular/core/testing';
import { InscriptionComponent } from './inscription.component';

describe('InscriptionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionComponent],
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(InscriptionComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
