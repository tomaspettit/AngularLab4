import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-presidents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './presidents.component.html',
  styleUrl: './presidents.component.css'
})
export class PresidentsComponent {
  presidents: any[] =
[{name: "Higgins", term:"2011-"},
{name: "McAleese", term:"1997-2011"},
{name: "Robinson", term:"1990-1997"},
{name: "Hillery", term:"1976-1990"},
{name: "O Dalaigh", term:"1974-1976"}];
}
