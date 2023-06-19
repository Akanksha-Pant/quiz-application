import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { areMyQuizzesLoading, myQuizzesSelectors } from '../../selectors/quiz'
import { getMyQuizzes } from '../../stores/quiz'
import { toggleQuizModal } from '../../stores/home'
import QuizCard from '../../components/quizCard'

const MyQuizzes = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(areMyQuizzesLoading)
  const quizzes = useSelector(myQuizzesSelectors)

  useEffect(() => {
    dispatch(getMyQuizzes())
  }, [dispatch])

  const openQuizModal = () => {
    dispatch(toggleQuizModal())
  }

  if (isLoading) {
    return <div> Loading....</div>
  } else {
    return (
      <div className="primary-block">
        <div className="qz-grid">
          {quizzes.map((data) => (
            <QuizCard isQuizUpdatable={true} data={data} />
          ))}
        </div>
        <button onClick={openQuizModal}> + Add Quiz </button>
      </div>
    )
  }
}

export default MyQuizzes
