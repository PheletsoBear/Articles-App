import { createReducer, createFeature, on } from "@ngrx/store";
import { authStateInterface } from "../types/authState.interface";
import { register } from "./actions";

//Defining initial state
const initialState: authStateInterface = {
    isSubmitting: false,
}

const authFeature = createFeature({

    name: 'auth',
    reducer: createReducer(
        initialState,
        on(register, (state) => ({ ...state, isSubmitting: true }))
    ),
})

//Selector for auth
export const { 
    name: authFeatureKey, 
    reducer: authReducer, 
    selectIsSubmitting
 } = authFeature