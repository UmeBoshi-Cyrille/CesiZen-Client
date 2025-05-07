import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetForgottenPasswordComponent } from './reset-forgotten-password.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ResetForgottenPasswordComponent', () => {
  let component: ResetForgottenPasswordComponent;
  let fixture: ComponentFixture<ResetForgottenPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetForgottenPasswordComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetForgottenPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
