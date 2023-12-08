import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '@/components/Firebase'

const signIn1 = (email:string, password: string) => {
    return(
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error: " + errorCode + " " + "\n"+ errorMessage);
  })
    )
}

export default signIn1;