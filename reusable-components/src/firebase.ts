import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWDPrLypHNesY66EEbJyAzttsldbRLVJM",
  authDomain: "simple-register-login.firebaseapp.com",
  databaseURL: "https://simple-register-login-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "simple-register-login",
  storageBucket: "simple-register-login.firebasestorage.app",
  messagingSenderId: "563972555045",
  appId: "1:563972555045:web:3d63ef6ee0640a9acb5acc",
  measurementId: "G-5VVFSHCFJ2",
};

// Initialize Firebase avoiding duplicate app initialization
const app: FirebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth: Auth = getAuth(app);

export { app, auth };
