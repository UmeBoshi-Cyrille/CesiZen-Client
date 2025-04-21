import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPassordComponent } from './reset-passord.component';

describe('ResetPassordComponent', () => {
  let component: ResetPassordComponent;
  let fixture: ComponentFixture<ResetPassordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPassordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPassordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
