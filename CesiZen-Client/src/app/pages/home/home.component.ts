import { Component } from '@angular/core';
import { CarousselComponent } from '@components/caroussel/caroussel.component';
import { RouterModule } from '@angular/router';
import { ToastComponent } from '@components/toast/toast.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarousselComponent, RouterModule, ToastComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  repetitions = Array(15).fill(null);
}
