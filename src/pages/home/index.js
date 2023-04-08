import React from 'react'

import PreSignUpPage from './preSignUp'
import AuthenticationForm from './signInForm'

const Home = () => {
  return (
    <>
      <div>
        <PreSignUpPage />
        <AuthenticationForm />
      </div>
    </>
  )
}

export default Home
