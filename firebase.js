import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd53V-2vroMZ0rL8kmwcNkmp1OLtb4HOc",
  authDomain: "signal-clone-yt-bulid-758fe.firebaseapp.com",
  projectId: "signal-clone-yt-bulid-758fe",
  storageBucket: "signal-clone-yt-bulid-758fe.appspot.com",
  messagingSenderId: "683198001409",
  appId: "1:683198001409:web:20fc51ae6702c93d5e2b00",
};

let firebaseApp;

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebaseApp = firebase.app();
}

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

//
