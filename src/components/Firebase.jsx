import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjM-wcNmrcq5JACE6hqvJr2FPwB-rWSck",
  authDomain: "wedding-inv-d0bf2.firebaseapp.com",
  projectId: "wedding-inv-d0bf2",
  storageBucket: "wedding-inv-d0bf2.firebasestorage.app",
  messagingSenderId: "587126770474",
  appId: "1:587126770474:web:cca9cb5918b2e1a58b6c53",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };