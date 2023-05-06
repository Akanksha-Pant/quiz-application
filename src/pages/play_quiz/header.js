import React from 'react'
import { stateToHeaderData } from '../../constant'

const Header = ({ quizState }) => {
  const state = stateToHeaderData[quizState]
  const { img, title, description } = state

  return (
    <div className="header">
      <img src={img} alt="header" className="header__banner" />
      <div className="header__title"> {title} </div>
      <div className="header__description">{description}</div>
    </div>
  )
}

export default Header
