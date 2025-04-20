import { TestBed } from '@angular/core/testing';
import { ToastNotifierService } from './toast-notifier.service';
import { MessageService } from 'primeng/api';

describe('ToastNotifierService', () => {
  let service: ToastNotifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MessageService,
    ]});
    service = TestBed.inject(ToastNotifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
