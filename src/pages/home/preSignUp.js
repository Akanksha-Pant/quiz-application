import React from 'react'
import { useDispatch } from 'react-redux'

import homePageBanner from '../../img/home-banner.png'
import authInstance from '../../services/authetication'
import { toggleSignUpModal } from '../../stores/home'

const Banner = () => {
  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(toggleSignUpModal())
  }

  return (
    <section id="home" className="home">
      <div className="home-details">
        <p className="home-heading">
          Best way to create and play online quizzes.
        </p>
        <p className="home-description">
          Enjoy yourself by playing our custom games or create new quizzes for
          millions to enjoy
        </p>
        <button className="sign-up-btn" onClick={handleOnClick}>
          {' '}
          Sign Up{' '}
        </button>
      </div>
      <div className="home-img-block">
        <img src={homePageBanner} alt="home-bnnr" />
      </div>
    </section>
  )
}

const Features = () => {
  return (
    <section id="features">
      <div className="row primary-block">
        <div>
          <p> Play our quizzes! </p>
          <p></p>
        </div>
        <div></div>
      </div>
      <div className="row-reverse">
        <div>
          <p> Play our quizzes! </p>
          <p></p>
        </div>
        <div></div>
      </div>
      <div className="row primary-block">
        <div>
          <p> Play our quizzes! </p>
          <p></p>
        </div>
        <div></div>
      </div>
    </section>
  )
}

const Categories = () => {
  return <section id="categories"></section>
}

const Faqs = () => {
  return <section id="faqs"></section>
}

const PreSignUpPage = () => {
  return (
    <>
      <Banner />
    </>
  )
}

export default PreSignUpPage
