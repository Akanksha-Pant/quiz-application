import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getUser } from '../stores/home'
import { isLoadingSelector, userSelector } from '../selectors/home'

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch()
  const isLoading = useSelector(isLoadingSelector)
  const currentUser = useSelector(userSelector)

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  console.log(isLoading, currentUser)

  if (isLoading) {
    return <div> ...Loading</div>
  } else if (!currentUser) {
    return <Navigate to="/" />
  } else {
    return children
  }
}

export default ProtectedRoute
