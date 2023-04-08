import { firebaseAuth, firestore } from '../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'

class Authentication {
  constructor() {
    this.auth = firebaseAuth
    this.db = firestore
    this.usersRef = collection(this.db, 'users')
    this.currentUser = null
    this.auth.onAuthStateChanged((user) => {
      this.currentUser = user
    })
  }

  signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      )
      await addDoc(this.usersRef, {
        email,
        uid: userCredential.user.uid,
      })
      return { isSuccesful: true, userCredential }
    } catch (error) {
      return { error, isSuccesful: false }
    }
  }

  signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      )

      return { isSuccesful: true, userCredential }
    } catch (error) {
      return { error, isSuccesful: false }
    }
  }

  signOut = async () => {
    try {
      await this.signOut(this.auth)
      return { isSuccesful: true }
    } catch (error) {
      return { error, isSuccesful: false }
    }
  }

  getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = this.auth.onAuthStateChanged((user) => {
        unsubscribe()
        resolve(user)
      }, reject)
    })
  }
}

const authInstance = new Authentication()

export default authInstance
