import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB6DQzvqI3V8cmJnRVArblmbVW2rvFqAgw",
  authDomain: "olx-clone-462a7.firebaseapp.com",
  projectId: "olx-clone-462a7",
  storageBucket: "olx-clone-462a7.appspot.com",
  messagingSenderId: "676146389464",
  appId: "1:676146389464:web:f2af02a9ce49d172e7d2ad",
  measurementId: "G-EFFPRN0KLT",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
