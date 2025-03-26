import { TestBed } from '@angular/core/testing';
import { DiagnosticsComponent } from './diagnostics.component';

describe('DiagnosticsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosticsComponent],
    })
      .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DiagnosticsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

