import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatwebapp-491bc.firebaseapp.com",
  projectId: "reactchatwebapp-491bc",
  storageBucket: "reactchatwebapp-491bc.appspot.com",
  messagingSenderId: "909709700501",
  appId: "1:909709700501:web:f837aa8dd53a6b7e1b1a9c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
