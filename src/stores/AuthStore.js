import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { defineStore } from 'pinia';
import { auth } from '../js/firebase';
import { ref } from 'vue';

export const useAuthStore = defineStore('authStore', () => {
  const user = ref({});
  const init = () => {
    onAuthStateChanged(auth, (userDetails) => {
      if (userDetails) {
        const uid = userDetails.uid;
        user.value = { email: userDetails.email, uid };
      } else {
        user.value = {};
      }
    });
  };
  const registerUser = (credentials) => {
    createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error.message);
        // ..
      });
  };

  const loginUser = (credentials) => {
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        console.log('loggedout');
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    registerUser,
    loginUser,
    logoutUser,
    init,
    user
  };
});
