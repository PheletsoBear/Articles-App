import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/actions';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { selectIsSubmitting } from '../../store/reducer';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  imports: [CommonModule,ReactiveFormsModule],
 
})
export class RegisterComponent {

  //variable declaration
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
   isSubmitting$ = this.store.select(selectIsSubmitting)
  constructor(private fb: FormBuilder, private store: Store, private authService: AuthService){}

  onSubmit():void{
     console.log('form', this.form.getRawValue())

     //Mapping inserted values to the model

     const request: RegisterRequestInterface ={
       user: this.form.getRawValue()
     }
      
     //dispatching the store

     this.store.dispatch(authActions.register({ request }));

     //subscribing to the services
     this.authService.register(request).subscribe(
      result => console.log('success result:', result),
      error => {
        console.error('error result:', error);
        // Handle error (e.g., show an error message)
        if (error.status === 500 && error.error.includes('Unique constraint failed on the fields: (`email`)')) {
          alert('Email already exists. Please use a different email.');
        } else {
          alert('An error occurred during registration. Please try again later.');
        }
      }
    
     )
  }
}
