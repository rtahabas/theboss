import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyByk_v-ragrUa2uKFB_Kp85OtW3iggKq24",
  authDomain: "theproject-5ba93.firebaseapp.com",
  projectId: "theproject-5ba93",
  storageBucket: "theproject-5ba93.appspot.com",
  messagingSenderId: "549196625738",
  appId: "1:549196625738:web:5231e711aec1f455a233b3",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
