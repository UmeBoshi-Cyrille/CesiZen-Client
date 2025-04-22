import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackUserComponent } from './back-user.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('BackUserComponent', () => {
  let component: BackUserComponent;
  let fixture: ComponentFixture<BackUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackUserComponent],
      providers: [
        provideHttpClient(), provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
