import { firestore } from '../firebase'
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
} from 'firebase/firestore'
import authInstance from './authetication'

class Quiz {
  constructor() {
    this.db = firestore
    this.quizzesRef = collection(this.db, 'quizzes')
    this.currentUser = authInstance.getCurrentUser()
  }

  createQuiz = async (data) => {
    try {
      const docRef = await addDoc(this.quizzesRef, {
        ...data,
        uid: this.currentUser.uid,
      })
      const quiz = doc(this.db, 'quizzes', docRef.id)
      await updateDoc(quiz, {
        quizId: docRef.id,
      })
    } catch (error) {
      console.log(error)
      return {}
    }
  }

  getQuizzes = async () => {
    try {
      let quizzes = []
      const getQuizzesRef = query(this.quizzesRef)
      await getDocs(getQuizzesRef).then((querySnapshot) => {
        quizzes = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        console.log(quizzes)
      })
      return { status: 200, quizzes }
    } catch (error) {
      return {}
    }
  }

  updateQuiz = async (quizId, data) => {
    try {
      const quiz = doc(this.db, 'quizzes', quizId)
      await updateDoc(quiz, {
        ...data,
      })
    } catch (error) {
      return {}
    }
  }
}

const quizzesInstance = new Quiz()

export default quizzesInstance
