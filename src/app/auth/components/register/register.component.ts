import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/actions';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { selectIsSubmitting } from '../../store/reducer';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  imports: [CommonModule, ReactiveFormsModule],
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  isSubmitting$ = this.store.select(selectIsSubmitting);
  error$ = this.store.select((state: any) => state.auth.error);

  constructor(private fb: FormBuilder, private store: Store) {}

  onSubmit(): void {
    console.log('form', this.form.getRawValue());

    const request: RegisterRequestInterface = {
      user: this.form.getRawValue()
    };

    this.store.dispatch(authActions.register({ request }));
  }
}
