import { createReducer, createFeature, on } from "@ngrx/store";
import { authStateInterface } from "../types/authState.interface";
import { authActions } from "./actions";

//defines the initial state of the authentication module
const initialState: authStateInterface = {
  isSubmitting: false, //intially this is false
  error: null, //initially we do not have errors, only changes if there are errors
};

//create feature for the authentication module
const authFeature = createFeature({
  name: 'auth', //This is the authFeaure key 
  reducer: createReducer(
    initialState,
    //handles the 'registration' action by setting isSubmitting to true and clearing errors
    on(authActions.register, (state) => ({ ...state, isSubmitting: true, error: null })),

     //Handles the 'registerSuccess' action by resetting isSubmitting to false
    on(authActions.registerSuccess, (state) => ({ ...state, isSubmitting: false })),

    //Handles the 'registerFailure' action by resetting isSubmitting to false and setting the error messae
    on(authActions.registerFailure, (state, action) => ({ ...state, isSubmitting: false, error: action.error }))
  ),
});

//Export the feature's key, reducer function, and seletors
export const { name: authFeatureKey, reducer: authReducer, selectIsSubmitting } = authFeature;
