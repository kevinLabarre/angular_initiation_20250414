import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  imports: [],
  templateUrl: './event-handling.component.html',
  styleUrl: './event-handling.component.css'
})
export class EventHandlingComponent {

  message = "";

  hello() {
    alert('Bonjour, bienvenue !')
  }

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }

}
