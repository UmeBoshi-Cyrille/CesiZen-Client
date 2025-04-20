import { TestBed } from '@angular/core/testing';
import { RegistrationComponent } from './register.component';
import { provideHttpClient } from '@angular/common/http';

describe('RegistrationComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationComponent],
      providers: [
        provideHttpClient(),
      ],
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RegistrationComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
