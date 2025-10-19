
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getAuth , createUserWithEmailAndPassword , onAuthStateChanged , signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
 
const firebaseConfig = {
    apiKey: "AIzaSyCg7Wua27weEdGQWz4dr-d6yiSt4C701LE",
    authDomain: "smit-8c346.firebaseapp.com",
    projectId: "smit-8c346",
    storageBucket: "smit-8c346.firebasestorage.app",
    messagingSenderId: "872312269155",
    appId: "1:872312269155:web:3051d5043608f620438b56",
    measurementId: "G-S73JYYRE5C"
};

var  email = document.getElementById('email')
var  password = document.getElementById('password')
var  signupBtn = document.getElementById('signupbtn')
var  loginBtn = document.getElementById('loginbtn')


signupBtn.addEventListener('click', signup)
loginBtn.addEventListener('click', login)




const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


function signup () {
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    console.log("User Sign Up Successfully");
    console.log(user.email);
    })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    });
}

// function signin 

function login (){
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    console.log("User Login Successfully");
    const user = userCredential.user;
    console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(`User is signed in ${user.email}`);
    signupBtn.style.display = `none`; 
    loginBtn.style.display = `block`;
  } else {
    console.log("User is signed out");
    signupBtn.style.display = `block`; 
    loginBtn.style.display = `none`;
  }
});
