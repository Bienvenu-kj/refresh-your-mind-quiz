import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-apropos',
  imports: [HeaderComponent, RouterLink],
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css',
})
export default class AproposComponent {
  color_class = 'text-gray-200';
}
