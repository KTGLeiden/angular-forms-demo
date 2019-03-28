import { Component } from '@angular/core';
import { PersonData } from '../shared/models/person-data.model';
import { PersonForm } from './person.form';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html'
})
/** Component to test our form with */
export class FormTestComponent {
  /** Form that belongs to this component */
  public personForm: PersonForm = new PersonForm();

  /**
   * This function is called when a form has been submitted.
   * It will alert the user with his input.
   */
  public onFormSubmit() {
    const person: PersonData = this.personForm.getModel();
    alert(`
Hi ${person.firstName} ${person.lastName}!
You have been registered to our website.
Prepare to be spammed regularly, starting today! :D
The emailaddress we have is ${person.emailAddress || 'unknown'},
we even know your age, which is ${person.age || 'unknown'}
    `);
  }
}
