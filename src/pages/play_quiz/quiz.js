import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { calculateQuizScore } from '../../utils'
import {
  currentIndexSelector,
  isLoadingSelector,
  questionsSelector,
} from '../../selectors/questions'
import { quizResponseSelector } from '../../selectors/quiz'
import { getQuestions, setQuestionIndex } from '../../stores/question'
import { alterQuizResponse } from '../../stores/quiz'
import LoadingLayout from '../../components/loadingLayout'
import OptionCard from '../../components/optionCard'
import responseInstance from '../../services/quizResponse'
import Header from './header'

const Quiz = ({ title, bannerImg, quizId }) => {
  const dispatch = useDispatch()
  const questions = useSelector(questionsSelector)
  const isLoading = useSelector(isLoadingSelector)
  const currentIndex = useSelector(currentIndexSelector)
  const quizResponse = useSelector(quizResponseSelector)

  const currentQuestion = questions[currentIndex]

  const handleChangeIndex = (idx) => {
    dispatch(setQuestionIndex(idx))
  }

  const handleInputChange = (event, points, correctOption, questionTitle) => {
    const { name, value } = event.target
    dispatch(
      alterQuizResponse(name, { value, points, correctOption, questionTitle })
    )
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault()
    const finalResponse = calculateQuizScore(quizResponse)
    await responseInstance.createResponse(finalResponse, quizId)
  }

  useEffect(() => {
    dispatch(getQuestions(quizId))
  }, [dispatch, quizId])

  if (isLoading) {
    return <LoadingLayout />
  } else {
    const {
      title: questionTitle,
      description,
      options,
      questionId,
      points,
      correctOption,
    } = currentQuestion
    return (
      <div className="row">
        <Header quizState="quiz" />
        <div className="qz-content">
          <div className="qz-content__title"> {questionTitle} </div>
          <div className="qz-content__description"> {description} </div>
          {options.map((title, index) => (
            <OptionCard
              optionTitle={title}
              index={index}
              name={questionId}
              handleInputChange={(e) =>
                handleInputChange(
                  e,
                  points,
                  options[parseInt(correctOption)],
                  questionTitle
                )
              }
              checked={
                quizResponse[questionId]
                  ? quizResponse[questionId].value === title
                  : false
              }
            />
          ))}
          <div className="qz-content__button-bar">
            {currentIndex > 0 && (
              <button
                onClick={() => handleChangeIndex(currentIndex - 1)}
                className="qz-content__direction m-r-10"
              >
                &laquo;
              </button>
            )}
            <button
              type="submit"
              onClick={handleOnSubmit}
              className="btn-primary"
            >
              Submit
            </button>
            {currentIndex < questions.length - 1 && (
              <button
                onClick={() => handleChangeIndex(currentIndex + 1)}
                className="qz-content__direction m-l-10"
              >
                <div> &raquo; </div>
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Quiz
