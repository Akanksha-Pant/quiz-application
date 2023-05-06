import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import {
  currentQuizSelector,
  isResponseLoadingSelector,
  previousResponseSelector,
  quizTimerSelector,
} from '../../selectors/quiz'
import { setQuizAndResponse } from '../../stores/quiz'
import LoadingLayout from '../../components/loadingLayout'
import PostQuiz from './postQuiz'
import PreQuiz from './preQuiz'
import Quiz from './quiz'

const PlayQuiz = () => {
  const dispatch = useDispatch()
  const { quizId } = useParams()

  const isquizLoading = useSelector(isResponseLoadingSelector)
  const previousResponse = useSelector(previousResponseSelector)
  const currentQuiz = useSelector(currentQuizSelector)
  const hasTimerStarted = useSelector(quizTimerSelector)

  useEffect(() => {
    dispatch(setQuizAndResponse(quizId))
  }, [dispatch, quizId])

  if (isquizLoading) {
    return <LoadingLayout />
  } else if (Object.keys(previousResponse).length > 0) {
    return <PostQuiz {...currentQuiz} previousResponse={previousResponse} />
  } else if (hasTimerStarted) {
    return <Quiz {...currentQuiz} />
  } else {
    return <PreQuiz {...currentQuiz} />
  }
}

export default PlayQuiz
