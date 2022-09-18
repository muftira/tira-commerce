import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCygipZvf6lZxlYFxNfIA_XHF3i-PO6sXY",
  authDomain: "athentication-a9aa7.firebaseapp.com",
  projectId: "athentication-a9aa7",
  storageBucket: "athentication-a9aa7.appspot.com",
  messagingSenderId: "1087359739133",
  appId: "1:1087359739133:web:b9b2acd3418c827e188a94",
  measurementId: "G-HWWK664P81"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)