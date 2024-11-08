/*import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { auth } from "./firebase.js";
import { saveUser } from "./firebase.js";*/
import { registerUser, loginUser } from "./config.js";

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const registroForm = document.getElementById("registroForm");
registroForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = document.getElementById("emailRegistro").value 
    const password = document.getElementById("passwordRegistro").value 
    const name = document.getElementById("nombreRegistro").value
    if (email && password) {
        registerUser(email, password)
    } else {
        alert('Por favor, completa todos los campos.');
    }
})

const ingresoForm = document.getElementById("loginForm");
ingresoForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById("emailIngreso").value
    const password = document.getElementById("passwordIngreso").value
    if (email && password) {
        loginUser(email, password)
    } else {
        alert('Por favor, completa todos los campos.');
    }
})
