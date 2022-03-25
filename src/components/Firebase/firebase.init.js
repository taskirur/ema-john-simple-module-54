import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*
steps for authentication
Step-1:Initial setup
....................
1.create project
2.create web app
3.get configuration
4.initialize firebase
5.enable auth method


...................
Step-2:
1.create log in component
2.create register component
3.create route for login and register

*/