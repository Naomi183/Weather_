import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  // Replace with your Firebase project's configuration
  apiKey: 'AIzaSyDKuecENT2pH12MSS4qX2d5EyNR_zKYWWE',
  authDomain: 'weathro.firebaseapp.com',
  databaseURL: 'https://weathro-default-rtdb.firebaseio.com/',
  projectId: 'weathro',
  storageBucket: 'weathro.appspot.com',
  messagingSenderId: '928290145192',
  appId: '1:928290145192:web:89ec4d0b697cdcb9d0d39d',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { auth, db };


