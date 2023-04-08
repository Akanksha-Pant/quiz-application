import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getQuizzes } from '../../stores/quiz'
import { isLoadingSelector, quizzesSelector } from '../../selectors/quiz'

const QuizCard = ({ title }) => {
  return <div>{title}</div>
}

const QuizList = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(isLoadingSelector)
  const quizzes = useSelector(quizzesSelector)

  useEffect(() => {
    dispatch(getQuizzes())
  }, [dispatch])

  if (isLoading) {
    return <div> Loading....</div>
  } else {
    return (
      <div>
        <h1> Quiz List </h1>
        {quizzes.map(QuizCard)}
        <button> + Add Question </button>
      </div>
    )
  }
}

export default QuizList
