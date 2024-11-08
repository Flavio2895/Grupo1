import { auth } from "./config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import './salir.js'

onAuthStateChanged(auth, (user)=>{
    console.log(user)
});

