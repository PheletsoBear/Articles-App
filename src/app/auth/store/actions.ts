import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { CurrentUserInterface } from "../../shared/types/currentUser.interface";


export const authActions = createActionGroup({
    source: 'auth',
    events: {
        register: props<{request: RegisterRequestInterface}>(),
        'register success': props<{currentUser: CurrentUserInterface}>(),
         'Register failure': emptyProps(),
    },
})


/*
export const register = createAction(
    '[Auth] Register', // this is a type of Action
    
    props<{request : RegisterRequestInterface}>() // request : RegisterRequestInterface    

);
export const registerSuccess = createAction(
    '[Auth] RegisterSuccess', // this is a type of Action
    
    props<{currentUser : RegisterRequestInterface}>() // request : RegisterRequestInterface    

);
export const registerFailure = createAction(
    '[Auth] RegisterFailure', // this is a type of Action
    
    emptyProps() // request : RegisterRequestInterface    

);

*/
