import { signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { auth } from "./firebase.js";

const logout = document.getElementById("logout");

logout.addEventListener("click", async(e)=>{
    e.preventDefault();
    try{
        await signOut(auth);
        window.location.href="index.html"
    }catch(error){
        console.log(error)
    }
})