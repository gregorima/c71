import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  apiKey: "AIzaSyB99Gx9EJ_W--7QwbAv8LjjRPKUBjN9HIc",
  authDomain: "ptojeot.firebaseapp.com",
  databaseURL: "https://ptojeot-default-rtdb.firebaseio.com",
  projectId: "ptojeot",
  storageBucket: "ptojeot.appspot.com",
  messagingSenderId: "28395522495",
  appId: "1:28395522495:web:fe822686fb56ed4185b90a",
  measurementId: "G-8JKBZ29Q2H"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
