import { Inject, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../services/auth.service";
import { authActions } from "./actions";
import { catchError, map, of, switchMap } from "rxjs";
import { CurrentUserInterface } from "../../shared/types/currentUser.interface";


export const registerEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({ request }) =>
        authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) =>
            authActions.registerSuccess({ currentUser })
          ),
          catchError((error) => {
            console.error('Registration failed', error);
            return of(authActions.registerFailure({ error: error.error }));
          })
        )
      )
    );
  },
  { functional: true }
);