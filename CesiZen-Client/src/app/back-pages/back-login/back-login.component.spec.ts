import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackLoginComponent } from './back-login.component';
import { provideHttpClient } from '@angular/common/http';

describe('BackLoginComponent', () => {
  let component: BackLoginComponent;
  let fixture: ComponentFixture<BackLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackLoginComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
