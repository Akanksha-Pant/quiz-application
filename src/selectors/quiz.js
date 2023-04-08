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
