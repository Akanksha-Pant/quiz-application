import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setCurrentQuiz } from '../stores/quiz'

const QuizCard = ({ data, isQuizUpdatable }) => {
  const { title, points, duration, bannerImg, quizId } = data
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleOnPlay = () => {
    dispatch(setCurrentQuiz(data))
    navigate(`/quiz/${quizId}`)
  }

  const handleOnUpdate = () => {
    navigate(`/questions/${quizId}`)
  }

  return (
    <div className="qc-content">
      <img src={bannerImg} alt={title} />
      <div className="qc-content__title">{title}</div>
      <div className="qc-content__details">
        <div className="qc-content-points"> {points} Points </div>
        <div className="qc-content-duration"> {duration} mins</div>
      </div>
      <div className="qc-content__btn-bar">
        <button className="btn-primary  qc-content__btn" onClick={handleOnPlay}>
          Let's Play
        </button>
        {isQuizUpdatable && (
          <>
            <button
              className="btn-primary qc-content__btn"
              onClick={handleOnUpdate}
            >
              Add Question
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default QuizCard
