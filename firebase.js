
import firebase from '@firebase/app';
import 'firebase/firestore';

const  config = {
    apiKey: "AIzaSyCklZarT8CIO8BYPPRLFBA0zfbkYD4ziEk",
    authDomain: "ramadan-app-d1a76.firebaseapp.com",
    projectId: "ramadan-app-d1a76",
    storageBucket: "ramadan-app-d1a76.appspot.com",
    messagingSenderId: "21384850290",
    appId: "1:21384850290:web:4f02ceaa5e41d82ee18beb"
  };
  // Initialize Firebase
  firebase.initializeApp(config);



  export default firebase