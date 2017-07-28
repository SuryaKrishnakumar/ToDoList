import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  description: string;
  
  constructor(){
    this.description = 'To-do is a simple note-taking app ';
  }
}
