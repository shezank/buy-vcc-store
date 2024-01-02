// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1r-4V4cad7TGEUVC_LxEeOVHvyTeXEaU",
  authDomain: "buy-vcc-store.firebaseapp.com",
  projectId: "buy-vcc-store",
  storageBucket: "buy-vcc-store.appspot.com",
  messagingSenderId: "217487180007",
  appId: "1:217487180007:web:abe26bf2d24bba8ae32242",
  measurementId: "G-9C68KY1E8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;