import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isLoadingSelector, questionsSelector } from '../../selectors/questions'
import { toggleQuestionModal } from '../../stores/home'
import { getQuestions } from '../../stores/question'
import QuestionCard from './questionCard'
import BannerImage from '../../img/questions/bannerImg.png'

const QuestionsList = ({ quizId }) => {
  const dispatch = useDispatch()
  const questions = useSelector(questionsSelector)
  const isLoading = useSelector(isLoadingSelector)

  useEffect(() => {
    dispatch(getQuestions(quizId))
  }, [dispatch, quizId])

  const handleOnAdd = () => {
    dispatch(toggleQuestionModal())
  }

  if (isLoading) {
    return <>Loading...</>
  } else {
    return (
      <div className="qp-list col">
        <div className="qp-list__header row">
          <div className="qp-list__header-text">
            <div className="qp-list__header-title">Add a question</div>
            <div className="qp-list__header-description">
              Add a few questions and make your quiz intresting
            </div>
          </div>
          <img
            src={BannerImage}
            alt="banner-img"
            className="qp-list__banner-img"
          />
        </div>
        {questions.map((question, index) => (
          <QuestionCard {...question} key={index} index={index} />
        ))}
        <div className="qp-list__btn-bar">
          <button
            onClick={handleOnAdd}
            className="qp-list__submit-btn btn-primary"
          >
            + Add question
          </button>
        </div>
      </div>
    )
  }
}

export default QuestionsList
