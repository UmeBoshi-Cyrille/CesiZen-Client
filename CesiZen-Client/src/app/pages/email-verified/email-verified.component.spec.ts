import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerifiedComponent } from './email-verified.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('EmailVerifiedComponent', () => {
  let component: EmailVerifiedComponent;
  let fixture: ComponentFixture<EmailVerifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailVerifiedComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()// Provide HttpClient
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
