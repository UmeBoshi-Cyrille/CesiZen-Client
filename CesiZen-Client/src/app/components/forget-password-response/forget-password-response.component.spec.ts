import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordResponseComponent } from './forget-password-response.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ForgetPasswordResponseComponent', () => {
  let component: ForgetPasswordResponseComponent;
  let fixture: ComponentFixture<ForgetPasswordResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgetPasswordResponseComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()// Provide HttpClient
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPasswordResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
