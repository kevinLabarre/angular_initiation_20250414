import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-for',
  imports: [],
  templateUrl: './directive-for.component.html',
  styleUrl: './directive-for.component.css'
})
export class DirectiveForComponent {
  users = [{ id: 0, name: 'Sarah' }, { id: 1, name: 'Amy' }, { id: 2, name: 'Rachel' }, { id: 3, name: 'Jessica' }, { id: 4, name: 'Poornima' }]

  persons = []

}
