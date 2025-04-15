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

  checkBoxValue: boolean = false

  handleInputChange(event: Event) {
    const target = event.target as HTMLInputElement;

    this.passCheckBoxValue.emit(target.checked)
  }


  // Créer une input, Afficher le contenu de l'input sur le composant parent


}
