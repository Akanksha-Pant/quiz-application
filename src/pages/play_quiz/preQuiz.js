import React from 'react'
import { useDispatch } from 'react-redux'
import { instructions } from '../../constant'
import { toggleQuizTimer } from '../../stores/quiz'
import Header from './header'
import CheckMark from '../../img/play_quiz/checkmark.png'

const PreQuiz = ({
  title,
  bannerImg,
  quizId,
  description,
  duration,
  points,
}) => {
  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(toggleQuizTimer())
    setTimeout(function () {
      dispatch(toggleQuizTimer())
    }, 10000)
  }

  const instructionList = instructions(duration, points)

  return (
    <div className="row">
      <Header quizState="preQuiz" />
      <div className="pe-content col">
        <div className="pe-content__title"> {title} </div>
        <div className="m-t-10">{description}</div>
        <img src={bannerImg} className="pe-content__img" alt={title} />
        {instructionList.map((instruction) => (
          <>
            <div className="row pe-content__rule">
              <img
                src={CheckMark}
                alt="checkmark"
                className="pe-content__checkmark"
              />
              {instruction}
            </div>
          </>
        ))}
        <button onClick={handleOnClick} className="btn-primary m-t-10">
          Play Quiz
        </button>
      </div>
    </div>
  )
}

export default PreQuiz
