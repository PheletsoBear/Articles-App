import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { CurrentUserInterface } from "../../shared/types/currentUser.interface";

//defines group of actions related to authentication
export const authActions = createActionGroup //this used to group related actions under a common source, makes it easy to understand related actions to a specific featire or a module
({
    source: 'auth', //namespaces the actions under a common source. understanding that actions come from onemodule

    events: {
        //action for handling the initiation of the registration process
        register: props<{request: RegisterRequestInterface}>(),

        //Action for handling the successful registration
        'register success': props<{currentUser: CurrentUserInterface}>(),
         
        //Action for handling a failed registration
        'Register failure': props<{ error: string }>(),
    },
})


