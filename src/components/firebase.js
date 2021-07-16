import firebase from 'firebase/app'
import 'firebase/auth'


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAo00oM3hv9RaPCGmVu5gIkXF6Vl9bshf8",
    authDomain: "plantpedia-chat.firebaseapp.com",
    projectId: "plantpedia-chat",
    storageBucket: "plantpedia-chat.appspot.com",
    messagingSenderId: "958613123307",
    appId: "1:958613123307:web:6da109773df25370b58eae"
}).auth();