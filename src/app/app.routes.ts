import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';

export const appRoutes: Routes = [
    {
      path: '',
      loadChildren: ()=>
        import('../app/auth/auth.routes').then((m) => m.registerRoutes),
    },
];
