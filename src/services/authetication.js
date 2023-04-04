import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore} from "firebase/firestore";

class Authentication{
    constructor(){
        this.auth = getAuth(app);
        this.db = getFirestore(app);
        this.usersRef = collection(this.db, 'users');
    }

    signUp = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                this.auth,
                email,
                password
            );
            await addDoc(this.usersRef, {
                email,
                uid: userCredential.user.uid
            });    
            return { isSuccesful: true, userCredential};
        }
        catch (error){
            return {error, isSuccesful: false};
        }
    }

    signIn = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                this.auth,
                email,
                password
            );

            return { isSuccesful: true, userCredential};
        }
        catch (error){
            return {error, isSuccesful: false};
        }
    }

    signOut = async () => {
        try {
            await this.signOut(this.auth);
            return { isSuccesful: true};
        }
        catch (error){
            return {error, isSuccesful: false};
        }
    }

    getCurrentUser = () => {
        return this.auth.currentUser;
    }

}

const authInstance = new Authentication();

export default authInstance;