import "firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCzbWaEF7igjMQRPonwajbAzMUMhm3O7nY",
  authDomain: "cryptoairdrop-28f41.firebaseapp.com",
  projectId: "cryptoairdrop-28f41",
  storageBucket: "cryptoairdrop-28f41.appspot.com",
  messagingSenderId: "362507228318",
  appId: "1:362507228318:web:5b7af55c74ddb124b6578f",
  measurementId: "G-XSCL1J6GMJ"
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }
}

export default Firebase;
