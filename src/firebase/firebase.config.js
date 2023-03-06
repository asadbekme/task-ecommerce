import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// * Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChsSPslp9HdvAvAN5pZhwpPv8yyEjGwJQ",
  authDomain: "e-commerce-aa180.firebaseapp.com",
  projectId: "e-commerce-aa180",
  storageBucket: "e-commerce-aa180.appspot.com",
  messagingSenderId: "789963881424",
  appId: "1:789963881424:web:34439f08bf455b9fda57d5",
};

// * Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
