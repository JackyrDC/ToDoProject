import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
const getCurrentUser = () => {
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid : string = user.uid;
    const uname : string|null = user.displayName;
    const currentUser = { uid, uname};
    return(currentUser);
    } 
});
}

export default getCurrentUser;