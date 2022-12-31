
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAxwDu4fFDvzxTOCptL7AfJ5dLftzg7Ybo",
    authDomain: "databaseproyecto-e5466.firebaseapp.com",
    projectId: "databaseproyecto-e5466",
    storageBucket: "databaseproyecto-e5466.appspot.com",
    messagingSenderId: "301122145034",
    appId: "1:301122145034:web:abda5e67db2c275cb3c8f3"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFireStoreApp = () => {
    return app
}