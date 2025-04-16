import { TestBed } from '@angular/core/testing';
import { InscriptionComponent } from './inscription.component';
import { provideHttpClient } from '@angular/common/http';

describe('InscriptionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionComponent],
      providers: [
        provideHttpClient(),
      ],
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(InscriptionComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
