import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@components/footer/footer.component';
import { NavSideBarComponent } from '@components/nav-side-bar/nav-side-bar.component';
import { ToastNotifierService } from './services/toast/toast-notifier.service';
import { Toast } from 'primeng/toast';


@Component({
  selector: 'app-root',
  imports: [NavSideBarComponent,FooterComponent, RouterOutlet, Toast],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CesiZen-Client';

  constructor(private toast: ToastNotifierService) { }
}
