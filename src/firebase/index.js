import firebase from 'firebase/app';
import database from 'firebase/database'; // eslint-disable-line
const firebaseConfig = {
  apiKey: 'AIzaSyA5zxfCKMaM5B0G2S4ErXzkl2yaHxtGyWg',
  authDomain: 'ekecodingchallenge3.firebaseapp.com',
  databaseURL: 'https://ekecodingchallenge3.firebaseio.com',
  projectId: 'ekecodingchallenge3',
  storageBucket: 'ekecodingchallenge3.appspot.com',
  messagingSenderId: '1001072934455',
  appId: '1:1001072934455:web:5150479a048abb6e1949b2',
};

firebase.initializeApp(firebaseConfig);
export const myDatabase = firebase.database();
