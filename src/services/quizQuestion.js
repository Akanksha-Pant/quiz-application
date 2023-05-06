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

class Question {
  constructor() {
    this.db = firestore
    this.questionsRef = collection(this.db, 'questions')
  }

  createQuestion = async (formData) => {
    const {
      title,
      description,
      totalOptions,
      options,
      quizId,
      correctOption,
      points,
    } = formData
    try {
      const docRef = await addDoc(this.questionsRef, {
        title,
        description,
        totalOptions,
        quizId,
        options,
        correctOption,
        points,
      })
      const question = doc(this.db, 'questions', docRef.id)
      await updateDoc(question, {
        questionId: docRef.id,
      })
    } catch (error) {
      console.log(error)
      return {}
    }
  }

  getQuestions = async (quizId) => {
    try {
      let questions = []
      const getQuestionsRef = query(
        this.questionsRef,
        where('quizId', '==', quizId)
      )
      await getDocs(getQuestionsRef).then((querySnapshot) => {
        questions = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      })
      return { questions, status: 200 }
    } catch (error) {
      console.log(error)
      return {}
    }
  }

  updateQuestion = async (questionId, data) => {
    try {
      const question = doc(this.db, 'questions', questionId)
      await updateDoc(question, {
        ...data,
      })
    } catch (error) {
      return {}
    }
  }
}

const questionInstance = new Question()

export default questionInstance
