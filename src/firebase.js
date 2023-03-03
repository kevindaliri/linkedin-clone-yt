import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAjB5aq2KfWkZ0a9xK8Jsfh7Py8pSKNdeA",
    authDomain: "linkedin-clone-f54e6.firebaseapp.com",
    projectId: "linkedin-clone-f54e6",
    storageBucket: "linkedin-clone-f54e6.appspot.com",
    messagingSenderId: "442438094839",
    appId: "1:442438094839:web:5285f4b0b46c69712fa8f2",
    measurementId: "G-G2L5KB9DMK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{ db, auth };