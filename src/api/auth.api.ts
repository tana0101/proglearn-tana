import { firebaseAuth } from "@/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";

export const login = (username: string, password: string) => {
  return signInWithEmailAndPassword(firebaseAuth, username, password);
}