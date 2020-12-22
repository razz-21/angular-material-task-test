import { Component } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  autoClearField: FormControl;
  errorField: FormControl;

  constructor() {
    this.autoClearField = new FormControl('Text entered, the input field is completed.');
    this.errorField = new FormControl(
      'Text that user entering.',
      [Validators.required, Validators.email]
    );
    this.errorField.markAsTouched();
    this.errorField.markAsDirty();
  }

  clearFormField(formControl: AbstractControl): void {
    formControl.reset();
  }
}
