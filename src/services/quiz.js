import { firestore } from '../firebase'
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
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

  getQuizzes = async (getUserQuizzes = false) => {
    try {
      let quizzes = []
      let getQuizzesRef = query(this.quizzesRef)

      if (getUserQuizzes) {
        const currentUser = await authInstance.getCurrentUser()
        getQuizzesRef = query(
          this.quizzesRef,
          where('uid', '==', currentUser.uid)
        )
      }

      await getDocs(getQuizzesRef).then((querySnapshot) => {
        quizzes = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      })
      return { status: 200, quizzes }
    } catch (error) {
      return {}
    }
  }

  getQuiz = async (quizId) => {
    try {
      let quizzes = []
      const quizRef = query(this.quizzesRef, where('quizId', '==', quizId))
      await getDocs(quizRef).then((querySnapshot) => {
        quizzes = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      })
      return { status: 200, quiz: quizzes.length > 0 ? quizzes[0] : {} }
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
