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
    <div className="quiz-card">
      <img src={bannerImg} alt={title} className="quiz-card-img" />
      <div className="quiz-card-header">{title}</div>
      <div className="quiz-details">
        <div className="quiz-card-points"> {points} Points </div>
        <div className="quiz-card-duration"> {duration} mins</div>
      </div>
      <button className="quiz-card-play" onClick={handleOnPlay}>
        {' '}
        Let's Play
      </button>
      {isQuizUpdatable && (
        <>
          <button className="quiz-card-play" onClick={handleOnUpdate}>
            {' '}
            Add Question{' '}
          </button>
        </>
      )}
    </div>
  )
}

export default QuizCard
