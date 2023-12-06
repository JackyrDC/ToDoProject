import { getAuth, onAuthStateChanged, User as FirebaseUser } from "firebase/auth";

const auth = getAuth();

const getCurrentUser = (): Promise<FirebaseUser | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe(); // Detenemos la escucha una vez que se obtiene el estado

      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
    }, reject);
  });
};

export default getCurrentUser;
