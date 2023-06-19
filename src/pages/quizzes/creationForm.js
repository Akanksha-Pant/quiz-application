import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'

import Field from '../../components/field'
import { quizModalSelector } from '../../selectors/home'
import { toggleQuizModal } from '../../stores/home'
import quizzesInstance from '../../services/quiz'

const CreationForm = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({})
  const isQuizModalOpen = useSelector(quizModalSelector)
  const handleOnChange = (fieldName, event) => {
    setFormData({ ...formData, [fieldName]: event.target.value })
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault()
    console.log(formData)
    quizzesInstance.createQuiz({ ...formData })
  }

  const closeQuizModal = () => {
    dispatch(toggleQuizModal())
  }

  return (
    <ReactModal isOpen={isQuizModalOpen} className="qz-modal">
      <div>
        <form onSubmit={handleOnSubmit}>
          <Field label="Title">
            <input
              onChange={(e) => handleOnChange('title', e)}
              className="field-input"
            />
          </Field>
          <Field label="Description">
            <input
              onChange={(e) => handleOnChange('description', e)}
              className="field-input"
            />
          </Field>
          <Field label="Points">
            <input
              type="number"
              onChange={(e) => handleOnChange('points', e)}
              className="field-input"
            />
          </Field>
          <Field label="Duration">
            <input
              onChange={(e) => handleOnChange('duration', e)}
              className="field-input"
            />
          </Field>
          <button type="submit" className="btn-primary qz-add-btn">
            Add quiz
          </button>
          <button
            type="button"
            className="btn-secondary qz-add-btn"
            onClick={closeQuizModal}
          >
            {' '}
            Close Modal
          </button>
        </form>
      </div>
    </ReactModal>
  )
}

export default CreationForm
