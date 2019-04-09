import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAgtu1dfSz6e3_zMyUONpKFDM2fhDdGh-g",
  authDomain: "trainerconnect-8b202.firebaseapp.com",
  databaseURL: "https://trainerconnect-8b202.firebaseio.com",
  projectId: "trainerconnect-8b202",
  storageBucket: "gs://trainerconnect-8b202.appspot.com"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;