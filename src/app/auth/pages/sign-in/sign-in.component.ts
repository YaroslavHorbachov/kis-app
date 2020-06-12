import { Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { RouteManager } from 'src/app/shared/services';
import { SignInFacade } from '../../store/facades';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(
    private readonly fb: FormBuilder,
    private readonly routeManager: RouteManager,
    private readonly signInFacade: SignInFacade
  ) {}

  public isDarkMode = true;

  public readonly form = this.fb.group({
    emailAddress: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  public onSubmit() {
    const formValue = this.form.value;

    this.signInFacade.signIn(formValue);
  }

  public onSignUp() {
    this.routeManager.navigateToSignUp();
  }

  public get isFormInvalid(): boolean {
    return !this.form.valid;
  }
}
