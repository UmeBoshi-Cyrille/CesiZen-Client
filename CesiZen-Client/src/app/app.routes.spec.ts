import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';


beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [RouterTestingModule],
  }).compileComponents();
});

it('should inject ActivatedRoute', () => {
  const route = TestBed.inject(ActivatedRoute);
  expect(route).toBeTruthy();
});
