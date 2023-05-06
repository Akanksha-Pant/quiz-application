import { firestore } from '../firebase'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import authInstance from './authetication'

class QuizResponse {
  constructor() {
    this.db = firestore
    this.responseRef = collection(this.db, 'quizResponse')
  }

  createResponse = async (formData, quizId) => {
    try {
      const currentUser = await authInstance.getCurrentUser()
      console.log(formData, quizId, currentUser)

      await addDoc(this.responseRef, {
        ...formData,
        quizId,
        uid: currentUser.uid,
      })
    } catch (error) {
      return {}
    }
  }

  getResponse = async (quizId) => {
    let response = {}
    try {
      this.currentUser = await authInstance.getCurrentUser()
      const getResponseRef = query(
        this.responseRef,
        where('quizId', '==', quizId),
        where('uid', '==', this.currentUser.uid)
      )
      await getDocs(getResponseRef).then((querySnapshot) => {
        response = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      })
      return { status: 200, response: response.length > 0 ? response[0] : {} }
    } catch (error) {
      console.log(error)
      return {}
    }
  }
}

const responseInstance = new QuizResponse()

export default responseInstance
