import { app } from "../firebase";
import { collection, getFirestore } from "firebase/firestore";

class DatabaseServices {
    constructor(){
        this.db = getFirestore(app);
        this.usersRef = collection(this.db, 'users');
        this.quizzesRef = collection(this.db, 'quizzes');
    }

}

const dbInstance = new DatabaseServices('users');
export default dbInstance;
