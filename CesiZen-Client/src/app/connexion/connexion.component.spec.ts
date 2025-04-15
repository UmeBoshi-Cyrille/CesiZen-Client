import { TestBed } from '@angular/core/testing';
import { ConnexionComponent } from './connexion.component';

describe('SeConnecterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnexionComponent],
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ConnexionComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
