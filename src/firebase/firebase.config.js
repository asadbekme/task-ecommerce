import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoUlMYXKuuK2Nq4N58G2YiBlRcSEto-lQ",
  authDomain: "mebel-shop-88c44.firebaseapp.com",
  projectId: "mebel-shop-88c44",
  storageBucket: "mebel-shop-88c44.appspot.com",
  messagingSenderId: "371539039169",
  appId: "1:371539039169:web:be488986238b9254599540"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
