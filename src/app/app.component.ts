import { Component } from '@angular/core';
import { IPerson } from '../interface/IPerson';
import { ChildComponentComponent } from '../component/child-component/child-component.component';
import { DirectiveForComponent } from "../component/directive-for/directive-for.component";
import { EventHandlingComponent } from "../component/event-handling/event-handling.component";
import { UserComponent } from "../component/user/user.component";
import { FormComponent } from "../component/form/form.component";
import { ExerciceComponent } from "../component/exercice/exercice.component";

@Component({
  selector: 'app-root',
  imports: [ChildComponentComponent, DirectiveForComponent, EventHandlingComponent, UserComponent, FormComponent, ExerciceComponent],
  templateUrl: './app.component.html',
  // template: `<h1>Bienvenue sur mon app Angular !</h1>`,
  styleUrl: './app.component.css'
})
export class AppComponent {

  // Les types de variables

  age: number = 30;
  name: string = 'John Doe';

  fruits: string[] = ['appler', 'banana', 'orange']
  myArray: any[] = [12, 'banana', 'orange']

  person: IPerson = { name: "Bob", age: 25 }


  present(name: string): string {
    return `Hello ${name}`
  }

  hello(): void {
    console.log('Hello')
  }


  users: any = [
    {
      name: 'John Doe',
      age: 30,
      address: '123 Main St, Anytown, USA',
      phone: '123-456-7890',
      email: 'john.doe@example.com'
    },
    {
      name: 'Jane Doe',
      age: 25,
      address: '456 Other St, Othertown, USA',
      phone: '987-654-3210',
      email: 'jane.doe@example.com'
    },
    {
      name: 'Bob Smith',
      age: 35,
      address: '789 Elm St, Smalltown, USA',
      phone: '555-555-5555',
      email: 'bob.smith@example.com'
    }
  ]
}
