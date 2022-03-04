import * as firebase from 'firebase/app'
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMw7W4UjyE7mOwDR74_OGl1r0BOuebGc8",
  authDomain: "thebarbership-b808b.firebaseapp.com",
  projectId: "thebarbership-b808b",
  storageBucket: "thebarbership-b808b.appspot.com",
  messagingSenderId: "855570609886",
  appId: "1:855570609886:web:e1cdba64ac09c306fbb44f",
  measurementId: "G-K1WBCSGPM0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
