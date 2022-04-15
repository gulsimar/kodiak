import firebase from "firebase/compat/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtFavI6pVZApgWwg8p145VVo3NJ6xohqc",
  authDomain: "kodiak-code.firebaseapp.com",
  projectId: "kodiak-code",
  storageBucket: "kodiak-code.appspot.com",
  messagingSenderId: "577301992250",
  appId: "1:577301992250:web:4412bc5191e7399409f603",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
