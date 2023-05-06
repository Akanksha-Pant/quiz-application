import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getMyQuizzes } from '../../stores/quiz'
import { areMyQuizzesLoading, myQuizzesSelectors } from '../../selectors/quiz'
import QuizCard from '../../components/quizCard'

const QuizList = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(areMyQuizzesLoading)
  const quizzes = useSelector(myQuizzesSelectors)

  useEffect(() => {
    dispatch(getMyQuizzes())
  }, [dispatch])

  if (isLoading) {
    return <div> Loading....</div>
  } else {
    return (
      <div className="primary-block">
        <h1> Quiz List </h1>
        <div className="quiz-grid">
          {quizzes.map((data) => (
            <QuizCard isQuizUpdatable={true} data={data} />
          ))}
        </div>
        <button> + Add Question </button>
      </div>
    )
  }
}

export default QuizList
