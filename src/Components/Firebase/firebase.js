import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
  apiKey: "AIzaSyCX-8zStKMmD5WWZH1IvA36DtYVw2RKWGk",
  authDomain: "tasksdemo-43775.firebaseapp.com",
  databaseURL: "https://tasksdemo-43775.firebaseio.com",
  projectId: "tasksdemo-43775",
  storageBucket: "tasksdemo-43775.appspot.com",
  messagingSenderId: "341537849661"
  };

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();


    }

     // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

}

export default Firebase;