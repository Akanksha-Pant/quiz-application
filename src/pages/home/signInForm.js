import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { signUpModalStateSelector } from '../../selectors/home'
import authInstance from '../../services/authetication'

const AuthenticationForm = ({ signIn = true }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({})
  const isSignUpModalOpen = useSelector(signUpModalStateSelector);

  const handleOnSubmit = async (event) => {
    event.preventDefault()
    const { email, password } = formData
    if (signIn) {
      await authInstance.signUp(email, password)
      navigate('/all-quiz')
    } else {
      await authInstance.signIn(email, password)
    }
  }

  const handleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value })
    console.log(formData)
  }

  return (
    <ReactModal isOpen={isSignUpModalOpen} className="home-modal row">
      <div className="home-modal-form">
        <div className="home-modal-heading"> Welcome to Quizzy</div>
        <div className="home-modal-description">
          {' '}
          Sign In by entering the information below
        </div>
        <form onSubmit={handleOnSubmit}>
          <label> Email</label>
          <input
            type="text"
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
          <label> Password </label>
          <input
            type="text"
            onChange={(e) => handleInputChange('password', e.target.value)}
          />
          <button type="submit" className="sign-up-btn home-modal-btn">
            {' '}
            SignIn
          </button>
        </form>
      </div>
      <div className="home-modal-img"></div>
    </ReactModal>
  )
}

export default AuthenticationForm
