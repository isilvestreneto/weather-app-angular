import { Component, signal } from '@angular/core';
import { Navbar } from './ui/navbar/navbar';
import { Footer } from './ui/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  units = signal<'metric' | 'imperial'>('metric');
}
