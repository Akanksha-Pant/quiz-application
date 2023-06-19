import { createSelector } from 'reselect'

const baseSelector = (state) => state.home

export const isLoadingSelector = createSelector(
  baseSelector,
  (home) => home.isUserLoading
)

export const userSelector = createSelector(
  baseSelector,
  (home) => home.currentUser
)

export const signUpModalStateSelector = createSelector(
  baseSelector,
  (home) => home.isSignUpModalOpen
)

export const questionModalSelector = createSelector(
  baseSelector,
  (home) => home.isQuestionsModalOpen
)

export const quizModalSelector = createSelector(
  baseSelector,
  (home) => home.isQuizModalOpen
)
