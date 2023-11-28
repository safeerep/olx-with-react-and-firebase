import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCmAG2l80apW-TIuJemYPHxAxmpPWTcrnk",
  authDomain: "app-olx-3d211.firebaseapp.com",
  projectId: "app-olx-3d211",
  storageBucket: "app-olx-3d211.appspot.com",
  messagingSenderId: "959918545316",
  appId: "1:959918545316:web:f22ebbd3133bf9a09b8931"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
