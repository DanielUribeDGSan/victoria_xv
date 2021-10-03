// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJiUJarqVaSDbzieUka8SbQzGwYfeGsUs",
    authDomain: "victoria-637cb.firebaseapp.com",
    databaseURL: "https://victoria-637cb.firebaseio.com",
    projectId: "victoria-637cb",
    storageBucket: "victoria-637cb.appspot.com",
    messagingSenderId: "925002720217",
    appId: "1:925002720217:web:4eb03f65fd402cf6236fc8",
    measurementId: "G-GZVPQHRXNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

