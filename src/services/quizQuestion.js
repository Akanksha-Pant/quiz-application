import { app } from "../firebase";
import { 
    addDoc, 
    collection,
    doc,
    getDocs,
    getFirestore,
    query,
    updateDoc,
    where
} from "firebase/firestore";

class Question {
    constructor(){
        this.db = getFirestore(app);
        this.questionsRef = collection(this.db, 'questions');
    }


    createQuestion = async(formData, quizId) => {
        try {
            const docRef = await addDoc(this.questionsRef, {
                ...formData,
                quizId
            });
            const question = doc(this.db, 'questions', docRef.id);
            await updateDoc(question, {
                questionId: docRef.id
            })
        }
        catch (error){
            return {};
        }
    }

    getQuestions = async(quizId) => {
        try {
            const getQuestionsRef = query(this.questionsRef, where('quizId', '==', quizId));
            const questions = await getDocs(getQuestionsRef);
            return { questions};
        }
        catch (error){
            return {};
        }
    }

    updateQuestion = async(questionId, data) => {
        try {
            const question = doc(this.db, 'questions', questionId);
            await updateDoc(question, {
                ...data
            })
        }
        catch (error){
            return {};
        }
    }

}

const questionInstance = new Question();

export default questionInstance;

