import {initializeApp} from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2-2StPv1fpQ6szkRFhZFNyUccFuC8cNs",
  authDomain: "ecommerce-playwright.firebaseapp.com",
  projectId: "ecommerce-playwright",
  storageBucket: "ecommerce-playwright.appspot.com",
  messagingSenderId: "943494836904",
  appId: "1:943494836904:web:1843b682ab22905d45c89d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerUser = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
}

const logIn = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
}

export { registerUser, logIn };


