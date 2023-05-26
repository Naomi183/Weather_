import firebase from 'firebase/compat/app';
import auth from 'firebase/compat/auth';


export default class AuthService {
  constructor() {
    this.auth = firebase.auth();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.auth.signOut();
  }

  isAuthenticated() {
    return this.auth.currentUser != null;
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }
}
