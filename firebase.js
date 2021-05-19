import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBd53V-2vroMZ0rL8kmwcNkmp1OLtb4HOc",
  authDomain: "signal-clone-yt-bulid-758fe.firebaseapp.com",
  projectId: "signal-clone-yt-bulid-758fe",
  storageBucket: "signal-clone-yt-bulid-758fe.appspot.com",
  messagingSenderId: "683198001409",
  appId: "1:683198001409:web:20fc51ae6702c93d5e2b00",
});

export const auth = app.auth();
const db = app.firestore();

export default { app, db };
