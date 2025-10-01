import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  str = signal<string>('Header Komponents');

  strNoVecaka = input<string>('');

  sutamUzVecaku = output<string>();
}
