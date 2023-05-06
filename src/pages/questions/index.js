import React from 'react'
import { useParams } from 'react-router-dom'

import QuestionsList from './questionList'
import QuestionModal from './questionModal'

const QuestionsPage = () => {
  const { quiz: quizId } = useParams()
  return (
    <>
      <QuestionsList quizId={quizId} />
      <QuestionModal />
    </>
  )
}

export default QuestionsPage
