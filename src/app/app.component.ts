import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PresidentsComponent } from './presidents/presidents.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PresidentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  total:number = 0;
  reset:number=0;
  hidden:boolean=false;

  ImageClicked(){
    this.hidden=!this.hidden;
  }
  
}
