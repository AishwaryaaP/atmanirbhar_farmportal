import firebase from 'firebase/app';
import "firebase/database";
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_MSG,
    measurementId:process.env.REACT_APP_MEASUREMENT,
    appid:process.env.REACT_APP_APPID
    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebaseConfig;