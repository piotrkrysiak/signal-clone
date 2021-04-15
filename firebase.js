import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwOKcnI4XTkgxIDZMz5D-NwaQfKnPImk0",
  authDomain: "signal-clone-4e213.firebaseapp.com",
  projectId: "signal-clone-4e213",
  storageBucket: "signal-clone-4e213.appspot.com",
  messagingSenderId: "870653434368",
  appId: "1:870653434368:web:304627767d85816bcb16e5",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.intializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
