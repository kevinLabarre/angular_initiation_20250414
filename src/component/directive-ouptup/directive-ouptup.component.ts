import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-ouptup',
  imports: [FormsModule],
  templateUrl: './directive-ouptup.component.html',
  styleUrl: './directive-ouptup.component.css'
})
export class DirectiveOuptupComponent {

  @Output() passCheckBoxValue = new EventEmitter<boolean>();

  @Output() passInputTextValue = new EventEmitter<string>();

  checkBoxValue: boolean = false

  handleCheckboxChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.passCheckBoxValue.emit(target.checked)
  }


  handleInputTextChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.passInputTextValue.emit(target.value)
  }

}
