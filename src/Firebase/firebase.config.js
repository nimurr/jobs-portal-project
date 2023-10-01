// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa_En3ZGVRyUVYyUFGj7-axRbqz1hIBR0",
  authDomain: "facebook-project-auth.firebaseapp.com",
  projectId: "facebook-project-auth",
  storageBucket: "facebook-project-auth.appspot.com",
  messagingSenderId: "530006253566",
  appId: "1:530006253566:web:c90fcaa5b0f0b45951eaaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


