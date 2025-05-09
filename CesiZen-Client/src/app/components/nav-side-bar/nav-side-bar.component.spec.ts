import { TestBed } from '@angular/core/testing';
import { NavSideBarComponent } from './nav-side-bar.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('NavSideBarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavSideBarComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NavSideBarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
