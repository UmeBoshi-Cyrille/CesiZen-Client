import { TestBed } from '@angular/core/testing';
import { ConnexionComponent } from './connexion.component';
import { provideHttpClient } from '@angular/common/http';
import { ConnexionQueryService } from '../../services/connexion/connexion-query.service';

describe('SeConnecterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnexionComponent],
      providers: [
        provideHttpClient(), // Provide HttpClient
        ConnexionQueryService, // Provide any services used by the component
      ],
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ConnexionComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
