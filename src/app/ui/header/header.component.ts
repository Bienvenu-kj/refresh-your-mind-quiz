import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  title_size = input<number>(1.6);
  title_color = input.required();
  isH1 = input(true);

  tite_size_style = '';
  ngOnInit(): void {
    this.tite_size_style = `font-size:${this.title_size()}rem`;
  }
}
