import { createReducer, createFeature, on } from "@ngrx/store";
import { authStateInterface } from "../types/authState.interface";
import { authActions } from "./actions";

const initialState: authStateInterface = {
  isSubmitting: false,
  error: null,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.register, (state) => ({ ...state, isSubmitting: true, error: null })),
    on(authActions.registerSuccess, (state) => ({ ...state, isSubmitting: false })),
    on(authActions.registerFailure, (state, action) => ({ ...state, isSubmitting: false, error: action.error }))
  ),
});

export const { name: authFeatureKey, reducer: authReducer, selectIsSubmitting } = authFeature;
