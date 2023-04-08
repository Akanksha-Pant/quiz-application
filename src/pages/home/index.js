import React, { useState } from 'react'
import PreSignUpPage from './preSignUp'
import AuthenticationForm from './signInForm'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModalState = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <div>
        <PreSignUpPage onSignUp={toggleModalState} />
        <AuthenticationForm isModalOpen={isModalOpen} />
      </div>
    </>
  )
}

export default Home
