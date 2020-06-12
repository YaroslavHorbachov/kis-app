import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SignUpValidator {
  public checkPasswords(control: AbstractControl) {
    const { confirmPassword, password } = control.value;
    const isSamePassword = confirmPassword === password;

    return isSamePassword ? null : { isSamePassword };
  }
}
