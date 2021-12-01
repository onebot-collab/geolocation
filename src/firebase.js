import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAQJpp806Kuef5Tm5682uVN_nNH6IqZzNA",
  authDomain: "rc-geolocations.firebaseapp.com",
  databaseURL: "https://rc-geolocations-default-rtdb.firebaseio.com",
  projectId: "rc-geolocations",
  storageBucket: "rc-geolocations.appspot.com",
  messagingSenderId: "375452939163",
  appId: "1:375452939163:web:22691032ddad754575e73e",
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();

export default database;
