import { createUserWithEmailAndPassword } from 'firebase/auth';
import { defineStore } from 'pinia';
import { auth } from '../js/firebase';

export const useAuthStore = defineStore('authStore', () => {
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

  return {
    registerUser
  };
});
