import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCategoryComponent } from './by-category.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('ByCategoryComponent', () => {
  let component: ByCategoryComponent;
  let fixture: ComponentFixture<ByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByCategoryComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()// Provide HttpClient
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
