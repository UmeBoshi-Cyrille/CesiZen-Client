import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackUsersComponent } from './back-users.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('BackUsersComponent', () => {
  let component: BackUsersComponent;
  let fixture: ComponentFixture<BackUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackUsersComponent],
      providers: [provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
