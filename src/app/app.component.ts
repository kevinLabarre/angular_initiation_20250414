import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IPerson } from '../interface/IPerson';
import { ChildComponentComponent } from '../component/child-component/child-component.component';
import { DirectiveForComponent } from "../component/directive-for/directive-for.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponentComponent, DirectiveForComponent],
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




}
