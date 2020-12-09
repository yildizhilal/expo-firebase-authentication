
import * as firebase from 'firebase';


try {
  firebase.initializeApp({
    apiKey: "xxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxx",
    databaseURL: "xxxxxxxxxx",
    projectId: "xxxxxxxxx",
    storageBucket: "xxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxxxxxxxxx",
    measurementId: "xxxxxxxxx"
  })
  } catch (err) {
  // we skip the “already exists” message which is
  // not an actual error when we’re hot-reloading
  if (!/already exists/.test(err.message)) {
  console.error( err.stack)
  }}
  const Firebase= firebase;


export default Firebase