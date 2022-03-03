import * as firebase from 'firebase/app'
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmEzBzxPpdSZ0vsP34Lknqk01CPJzRjig",
  authDomain: "barb-c5e6f.firebaseapp.com",
  projectId: "barb-c5e6f",
  storageBucket: "barb-c5e6f.appspot.com",
  messagingSenderId: "787650390577",
  appId: "1:787650390577:web:479bac45c453b8fc0ec310",
  measurementId: "G-HBJ6H26DE2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
