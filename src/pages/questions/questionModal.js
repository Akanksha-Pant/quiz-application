import React from 'react'
import ReactModal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { questionModalSelector } from '../../selectors/home'
import { toggleQuestionModal } from '../../stores/home'
import CreationForm from './creationForm'

const QuestionModal = () => {
  const dispatch = useDispatch()
  const isModalOpen = useSelector(questionModalSelector)

  const handleModalClose = () => {
    dispatch(toggleQuestionModal())
  }

  return (
    <ReactModal isOpen={isModalOpen} className="qs-modal">
      <CreationForm handleOnClose={handleModalClose} />
    </ReactModal>
  )
}

export default QuestionModal
