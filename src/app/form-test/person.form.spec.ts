import { PersonData } from '../shared/models/person-data.model';
import { PersonForm } from './person.form';

let form: PersonForm;
describe('PersonForm', () => {
  beforeEach(() => {
    // Arrange
    form = new PersonForm();
  });
  describe('controls', () => {
    describe('firstName', () => {
      it('should be empty string by default', () => {
        expect(form.controls.firstName.value).toBe('');
      });

      it('should be invalid by default', () => {
        expect(form.controls.firstName.invalid).toBe(true);
      });

      it('should be valid when a value is set', () => {
        // ACt
        form.controls.firstName.setValue('firstNAme');
        // Assert
        expect(form.controls.firstName.valid).toBe(true);
      });
    });
  });

  describe('getModel', () => {
    it('should return the correct value', () => {
      // Arrange
      form.controls.firstName.setValue('test');
      // Act
      const person: PersonData = form.getModel();
      // Assert
      expect(person).toEqual(<PersonData>{ age: null, emailAddress: '', firstName: 'test', lastName: '' });
    });
  });
});
