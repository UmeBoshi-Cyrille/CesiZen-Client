import { TestBed } from '@angular/core/testing';
import { SeConnecterComponent } from './se-connecter.component';

describe('SeConnecterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeConnecterComponent],
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SeConnecterComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
