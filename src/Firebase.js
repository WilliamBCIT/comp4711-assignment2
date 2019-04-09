import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAgtu1dfSz6e3_zMyUONpKFDM2fhDdGh-g",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "trainerconnect-8b202",
  storageBucket: "YOUR_STORAGE_BUCKET"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;