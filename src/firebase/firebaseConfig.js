
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkXttP8lUifIYkM8yFwECFZyvxT8IvK2g",
  authDomain: "tutiendaecommerce-ff2a9.firebaseapp.com",
  projectId: "tutiendaecommerce-ff2a9",
  storageBucket: "tutiendaecommerce-ff2a9.appspot.com",
  messagingSenderId: "789449733523",
  appId: "1:789449733523:web:6f6a0f6452e83e2fae2466"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);