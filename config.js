import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBuBY70ETd7VV7p8ojSjHgW7vVJsyQ2u1E",
  authDomain: "willy-app-4829c.firebaseapp.com",
  projectId: "willy-app-4829c",
  storageBucket: "willy-app-4829c.appspot.com",
  messagingSenderId: "427010217859",
  appId: "1:427010217859:web:99dcf925e832462b3288b6"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
