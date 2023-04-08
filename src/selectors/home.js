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
