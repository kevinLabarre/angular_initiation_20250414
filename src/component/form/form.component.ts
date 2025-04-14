import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  checkBoxValue: boolean = false;

  name: string = "";
  password: string = "";

  handleSubmit() {
    console.log(` nom: ${this.name}, password: ${this.password}`);
  }

  handleTextChange(e: Event) {
    const target = e.target as HTMLInputElement
    console.log(target.value)
  }

}
