import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../store/actions';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
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

  constructor(private fb: FormBuilder, private store: Store){}

  onSubmit():void{
     console.log('form', this.form.getRawValue())
     const request: RegisterRequestInterface ={
       user: this.form.getRawValue()
     }
     this.store.dispatch(register(request))
  }
}
