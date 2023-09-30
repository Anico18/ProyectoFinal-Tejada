import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDyExxKtXTNpKWj4JptQBBwp5Html4jJ2I",
  authDomain: "database-react-coder.firebaseapp.com",
  projectId: "database-react-coder",
  storageBucket: "database-react-coder.appspot.com",
  messagingSenderId: "89193717316",
  appId: "1:89193717316:web:5b808eddbc68693e88e611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
