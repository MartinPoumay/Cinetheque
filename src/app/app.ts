import { Component, NgModule, signal } from '@angular/core';
import { Banner } from "./banner/banner";
import { RouterOutlet } from '@angular/router';
import { Main } from "./main/main";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [Banner, RouterOutlet, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
