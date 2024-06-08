import { createReducer, createFeature, on } from "@ngrx/store";
import { authStateInterface } from "../types/authState.interface";
import { authActions } from "./actions";

//Defining initial state
const initialState: authStateInterface = {
    isSubmitting: false,
}

const authFeature = createFeature({

    name: 'auth',
    reducer: createReducer(
        initialState,
        on(authActions.register, (state) => ({ ...state, isSubmitting: true }))
    ),
})

//Selector for auth

export const { 
    name: authFeatureKey, 
    reducer: authReducer, 
    selectIsSubmitting
 } = authFeature