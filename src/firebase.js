import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBWipoEEi32UkrKepT1z449qmsE8SXCssg",
  authDomain: "netflix-clone-ee29b.firebaseapp.com",
  projectId: "netflix-clone-ee29b",
  storageBucket: "netflix-clone-ee29b.appspot.com",
  messagingSenderId: "436235005962",
  appId: "1:436235005962:web:54708d784ce0aacd662ff3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;