import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoG9yrOxP5Y429UXh76YrMeyVq3YXv1NE",
  authDomain: "ecommerce-task-de74f.firebaseapp.com",
  projectId: "ecommerce-task-de74f",
  storageBucket: "ecommerce-task-de74f.appspot.com",
  messagingSenderId: "681666032316",
  appId: "1:681666032316:web:d24dcbdeffabd8e7c356b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
