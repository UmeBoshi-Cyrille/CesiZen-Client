import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackHomeComponent } from './back-home.component';
import { provideHttpClient } from '@angular/common/http';

describe('BackHomeComponent', () => {
  let component: BackHomeComponent;
  let fixture: ComponentFixture<BackHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackHomeComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
