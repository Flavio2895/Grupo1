// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy9k9BvKGGsf5q-CQNCzpkHQIFzhKAJkg",
  authDomain: "proyectoprueba1-6a73a.firebaseapp.com",
  projectId: "proyectoprueba1-6a73a",
  storageBucket: "proyectoprueba1-6a73a.firebasestorage.app",
  messagingSenderId: "84019438714",
  appId: "1:84019438714:web:85c6db2e8b1bb97aa507c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
const db = getFirestore(app);


export function registerUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        window.location.href = 'contenido.html';
    })
}

export function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        window.location.href = 'contenido.html';
    })
}

