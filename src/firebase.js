// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDs_waF0OTVk3SF7zba6_5B7EQgPC5BXjE",
  authDomain: "chatapp-faf7d.firebaseapp.com",
  projectId: "chatapp-faf7d",
  storageBucket: "chatapp-faf7d.appspot.com",
  messagingSenderId: "967534323099",
  appId: "1:967534323099:web:e2628340d365a784f16d3e", 
  measurementId: "G-0F2S3Y3B4P"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider ,db};
export default db;