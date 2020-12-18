import { Component } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  autoClearField: FormControl;
  emailField: FormControl;
  title = 'test-task';

  constructor() {
    this.autoClearField = new FormControl('');
    this.emailField = new FormControl(
      '',
      [Validators.required, Validators.email]
    )
  }

  clearFormField(formControl: AbstractControl): void {
    formControl.reset();
  }
}
