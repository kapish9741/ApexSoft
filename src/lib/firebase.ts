import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// ✅ Replace with your Firebase config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAN9Ot-IlP5AF-aRsqW2syBa32rIsrzmLs",
  authDomain: "miraifit.firebaseapp.com",
  projectId: "miraifit",
  appId: "1:562770300198:web:e6d5a8344ed1e6d8aa45e7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };