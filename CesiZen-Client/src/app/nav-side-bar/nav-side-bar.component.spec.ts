import { TestBed } from '@angular/core/testing';
import { NavSideBarComponent } from './nav-side-bar.component';

describe('NavSideBarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavSideBarComponent],
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NavSideBarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
