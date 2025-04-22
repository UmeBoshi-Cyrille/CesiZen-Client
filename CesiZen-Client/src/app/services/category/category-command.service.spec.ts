import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CategoryCommandService } from './category-command.service';


describe('CategoryCommandService', () => {
  let service: CategoryCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(CategoryCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
