import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideState, provideStore } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { features } from 'process';
import { authFeatureKey, authReducer } from './app/auth/store/reducer';


bootstrapApplication(AppComponent,
  {
    providers: [
      provideRouter(appRoutes), 
      provideStore(),  
       provideState(authFeatureKey, authReducer),
       provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    })]

  },

)
  .catch((err) => console.error(err));
