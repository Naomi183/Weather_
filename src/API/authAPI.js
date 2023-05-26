import firebase from 'firebase/app';
import 'firebase/auth';

export const signUp = async (email, password) => {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export const login = async (email, password) => {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export const logout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export const resetPassword = async (email) => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
    } catch (error) {
      throw new Error(error.message);
    }
  };
  const authAPI = {
    signUp,
    login,
    logout,
    resetPassword,
  };
  
  export default authAPI;
  