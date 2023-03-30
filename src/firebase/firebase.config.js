import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiu7TcodL-5C6wz9Iuh_q7ubq1I8HpOjc",
  authDomain: "ecommerce-task-254dc.firebaseapp.com",
  projectId: "ecommerce-task-254dc",
  storageBucket: "ecommerce-task-254dc.appspot.com",
  messagingSenderId: "253873602799",
  appId: "1:253873602799:web:03a91e15a15c8cc7a09b1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
