import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { userSelector } from '../../selectors/home'

import PreSignUpPage from './preSignUp'
import AuthenticationForm from './signInForm'

const Home = () => {
  const currentUser = useSelector(userSelector)
  if (!currentUser) {
    return (
      <>
        <div>
          <PreSignUpPage />
          <AuthenticationForm />
        </div>
      </>
    )
  } else {
    return <Navigate to="all-quiz" />
  }
}

export default Home
