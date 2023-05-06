import { createSelector } from 'reselect'

const baseSelector = (state) => state.questions

export const isLoadingSelector = createSelector(
  baseSelector,
  (questions) => questions.isLoading
)

export const questionsSelector = createSelector(
  baseSelector,
  (questions) => questions.questions
)

export const currentIndexSelector = createSelector(
  baseSelector,
  (questions) => questions.currentIndex
)
