import { Component } from '@angular/core';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
