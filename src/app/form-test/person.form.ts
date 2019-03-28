import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonData } from '../shared/models/person-data.model';

/** Form that is responsible for getting person data.  */
export class PersonForm extends FormGroup {
  constructor() {
    super({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      emailAddress: new FormControl('', [Validators.email, Validators.maxLength(200)]),
      age: new FormControl('', [Validators.max(99)])
    });
  }

  /** Gets the model of this form */
  public getModel(): PersonData {
    return {
      firstName: this.controls.firstName.value,
      lastName: this.controls.lastName.value,
      emailAddress: this.controls.emailAddress.value,
      age: this.controls.age.value
    };
  }
}
