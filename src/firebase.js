import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCK6es5NCFDCws2p8pGap09KVjQOt2ttAI",
  authDomain: "snap-chat-cbbf7.firebaseapp.com",
  projectId: "snap-chat-cbbf7",
  storageBucket: "snap-chat-cbbf7.appspot.com",
  messagingSenderId: "105577976283",
  appId: "1:105577976283:web:dd9116ef3d4ccd39cf17fe",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
