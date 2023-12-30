// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAZE9QrknugrTISTUbDaoq29Ii3zMqlnQ",
  authDomain: "netflix-gpt-2cb9b.firebaseapp.com",
  projectId: "netflix-gpt-2cb9b",
  storageBucket: "netflix-gpt-2cb9b.appspot.com",
  messagingSenderId: "379326142248",
  appId: "1:379326142248:web:643e7c7bb5a72af851621d",
  measurementId: "G-1DFY23P69K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
