const firebaseConfig = {
    apiKey: "AIzaSyDU5hIzUSfHwHgPxsvRdH6QkLM-_8jaekU",
    authDomain: "hawktalk-b0a71.firebaseapp.com",
    databaseURL: "https://hawktalk-b0a71-default-rtdb.firebaseio.com",
    projectId: "hawktalk-b0a71",
    storageBucket: "hawktalk-b0a71.appspot.com",
    messagingSenderId: "537777830041",
    appId: "1:537777830041:web:1b5ce3e943d55c09d1e008",
    measurementId: "G-7T0M3EK19Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref(); //스토리지 저장소 참조