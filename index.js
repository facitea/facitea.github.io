const firebaseConfig = {
  apiKey: "AIzaSyDIrOivTKOIFNFygWPaj08Y6xZIcpmDIX8",
  authDomain: "gbsb-16933.firebaseapp.com",
  projectId: "gbsb-16933",
  storageBucket: "gbsb-16933.appspot.com",
  messagingSenderId: "581180610741",
  appId: "1:581180610741:web:62cb4af9be3af30d46c6fc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});