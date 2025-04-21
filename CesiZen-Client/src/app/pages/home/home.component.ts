import { Component } from '@angular/core';
import { CarousselComponent } from '@components/caroussel/caroussel.component';
import { RouterModule } from '@angular/router';
import { ToastComponent } from '@components/toast/toast.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarousselComponent, RouterModule, ToastComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
