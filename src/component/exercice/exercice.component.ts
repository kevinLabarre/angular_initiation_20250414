import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercice',
  imports: [FormsModule],
  templateUrl: './exercice.component.html',
  styleUrl: './exercice.component.css'
})
export class ExerciceComponent {

  displayForm: boolean = false

  name: string = ""
  age: number = 0
  address: string = ""
  phone: string = ""
  email: string = ""

  // Variable de l'input de la barre de recherche
  //  bind avec ngModel
  searchInput: string = ""

  consigne: string = "<pre>" +
    " <ul class='text-l pt-2'>" +
    " <li>" +
    " 1. Utiliser le @for pour afficher une liste d'utilisateurs" +
    " </li>" +
    " <li>" +
    " 2. Afficher l'index de chacun des utilisateurs" +
    " </li>" +
    " <li>" +
    " 3. Ajouter un bouton 'supprimer' sur chacune des lignes --> ne rajouter que le bouton, ne pas implémenter de fonction liées au bouton" +
    " </li>" +
    " <li>" +
    " 4. Utiliser le '(click)' pour implémenter la fonction de suppression de l'utilisateur. Celle ci doit supprimer un utilisateur de la liste" +
    " </li>" +
    " <li>" +
    " 5. Rajouter une fonctionnalité qui permet d'ajouter un utilisateur (via un formulaire) dans la liste" +
    " </li>" +
    " <li>" +
    " 6. Faire une barre de recherche sur le nom des utilisateurs" +
    " </li>" +
    " </ul>" +
    "</pre>"



  users: any[] = [
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

  originelUsers: any = [] = [...this.users]


  handleDeleteUser(index: number): void {
    this.users.splice(index, 1)
  }

  handleDisplayForm(): void {
    this.displayForm = !this.displayForm
  }

  handleAddUser(): void {
    this.users.push({
      name: this.name,
      age: this.age,
      address: this.address,
      phone: this.phone,
      email: this.email
    })

    this.resetForm()
  }

  resetForm(): void {
    this.name = "";
    this.age = 0;
    this.address = "";
    this.phone = "";
    this.email = "";
    this.displayForm = false
  }

  handleSearch(): void {
    this.users = this.originelUsers.filter((user: any) => user.name.toLowerCase().includes(this.searchInput.toLowerCase()))
  }
}
