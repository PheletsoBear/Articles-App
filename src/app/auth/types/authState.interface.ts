//this defines the structure of the state object
export interface authStateInterface{
    isSubmitting: boolean; //defines if the registration is in progress, helps in controlling the UI such as disabling button and spinners
    error : string | null //this stores the error messages that might occur during the process of registration
}