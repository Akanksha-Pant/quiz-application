import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getQuizzes } from '../../stores/quiz'
import { isLoadingSelector } from '../../selectors/home'
import { quizzesSelector } from '../../selectors/quiz'
import QuizCard from '../../components/quizCard'

const AllQuizzes = () => {
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
      <div className="primary-block">
        <h1> Quiz List </h1>
        <div className="quiz-grid">
          {quizzes.map((data) => (
            <QuizCard data={data} isUpdatable={true} />
          ))}
        </div>
      </div>
    )
  }
}

export default AllQuizzes
