import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyBtGKeLS_89jLDtSQn9jEpwNacWLaVnTiE",
        authDomain: "project-67-90ce3.firebaseapp.com",
        databaseURL: "https://project-67-90ce3-default-rtdb.firebaseio.com",
        projectId: "project-67-90ce3",
        storageBucket: "project-67-90ce3.appspot.com",
        messagingSenderId: "635385594055",
        appId: "1:635385594055:web:4c28a182cafdd6bd977ee2"
    
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();