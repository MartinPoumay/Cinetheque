import { Component, signal } from '@angular/core';
import { Banner } from "./banner/banner";
import { RouterOutlet } from '@angular/router';
import { Main } from "./main/main";

@Component({
  selector: 'app-root',
  imports: [Banner, RouterOutlet, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
