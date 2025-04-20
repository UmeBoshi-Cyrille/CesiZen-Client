import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppComponent],
    providers: [
      providePrimeNG({
        theme: { preset: Aura }
      }),
      provideAnimationsAsync(),
      Toast,
      MessageService
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
