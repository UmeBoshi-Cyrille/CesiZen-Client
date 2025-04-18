import { Component } from '@angular/core';
import { NextDirective } from '@directives/next.directive';
import { PrevDirective } from '@directives/prev.directive';


@Component({
  selector: 'app-caroussel',
  standalone: true,
  imports: [NextDirective, PrevDirective],
  templateUrl: './caroussel.component.html',
  styleUrl: './caroussel.component.scss'
})
export class CarousselComponent {

}
