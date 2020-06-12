import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { SignUpFacade } from '../../store/facades';
import { CustomerCreateViewModelSex } from '../../../shared/services';
import { SignUpValidator } from '../../validators';
import { debug } from 'src/app/shared/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit, OnDestroy {
  constructor(
    private readonly fb: FormBuilder,
    private readonly signUpFacade: SignUpFacade,
    private readonly signUpValidator: SignUpValidator
  ) {}

  public readonly isLoading$ = this.signUpFacade.isLoading$.pipe(debug());

  public readonly sexOptions = CustomerCreateViewModelSex;

  public readonly form = this.fb.group(
    {
      firstName: ['', [Validators.required, Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.maxLength(30)]],
      emailAddress: ['', [Validators.required, Validators.email]],
      sex: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.maxLength(60)]],
      confirmPassword: ['', [Validators.required, Validators.maxLength(60)]],
    },
    {
      validators: [this.signUpValidator.checkPasswords],
    }
  );

  public ngOnInit() {}

  public ngOnDestroy() {}

  public onSubmit() {
    const { confirmPassword, ...modelProps } = this.form.value;

    this.signUpFacade.signUp(modelProps);
  }

  public get isFormInvalid(): boolean {
    return !this.form.valid;
  }
}
