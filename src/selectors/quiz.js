import { createSelector } from 'reselect'

const baseSelector = (state) => state.quiz

export const isLoadingSelector = createSelector(
  baseSelector,
  (quizzes) => quizzes.isLoading
)

export const quizzesSelector = createSelector(
  baseSelector,
  (quizzes) => quizzes.quizzes
)

export const areMyQuizzesLoading = createSelector(
  baseSelector,
  (quizzes) => quizzes.myQuizzesLoading
)

export const myQuizzesSelectors = createSelector(
  baseSelector,
  (quizzes) => quizzes.myQuizzes
)

export const currentQuizSelector = createSelector(
  baseSelector,
  (quizzes) => quizzes.currentQuiz
)

export const quizResponseSelector = createSelector(
  baseSelector,
  (quizzes) => quizzes.quizResponse
)

export const previousResponseSelector = createSelector(
  baseSelector,
  (quizzes) => quizzes.previousResponse
)

export const isResponseLoadingSelector = createSelector(
  baseSelector,
  (quizzes) => quizzes.isQuizResponseLoading
)

export const quizTimerSelector = createSelector(
  baseSelector,
  (quizzes) => quizzes.hasQuizTimerStarted
)
