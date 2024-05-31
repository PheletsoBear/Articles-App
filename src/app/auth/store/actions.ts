import { createAction, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../types/registerRequest.interface";



export const register = createAction(
    '[Auth] Register', // this is a type of Action
    props<RegisterRequestInterface>()
    
);
