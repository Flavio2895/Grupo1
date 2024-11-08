// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
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
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore();

//GuardarPost
export const savePost = (description, userMail) => {
  addDoc(collection(db, "Posts"), {description, userMail})
}

export const saveUser = (userMail, nombre, apellido, nacimiento, estudio, civil, intereses) => {
  addDoc(collection(db, "Usuarios"), {userMail, nombre, apellido, nacimiento, estudio, civil, intereses})
}

//ObtenerTodosLosPost
export const getPosts = () => getDocs(collection(db, "Posts"));

//ActualizarPostsAutomáticamente
export const onGetPosts = (callback) => onSnapshot(collection(db, "Posts"), callback);

export const deletePost = (id) => deleteDoc(doc(db, "Posts", id));

export const getPost = (id) => getDoc(doc(db, "Posts", id));

export const updatePost = (id, newFields) => updateDoc(doc(db, "Posts", id), newFields);