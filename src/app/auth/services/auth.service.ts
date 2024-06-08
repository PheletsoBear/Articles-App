import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { Observable, map } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { authResponseInterface } from '../types/authResponse.interface';
import { response } from 'express';
import { environment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

   register(data: RegisterRequestInterface):Observable<CurrentUserInterface>{
     const url = environment.apiUrl + '/users'
     return this.http.post<authResponseInterface>(url,data).pipe(map((response) => response.user))
   }

}
