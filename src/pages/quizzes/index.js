import React, { useState } from 'react'

import AllQuizzes from './allQuizzes'
import Banner from '../../components/banner'
import BannerImg from '../../img/quizzes/quiz-banner.png'
import CreationForm from './creationForm'
import MyQuizzes from './myQuizzes'

const Quizzes = () => {
  const [tabType, setTabType] = useState('all-quiz')

  const onTabClick = (type) => {
    setTabType(type)
  }

  return (
    <div>
      <Banner
        title="Lets play !"
        description="Select and play from a variety of quizzes"
        img={BannerImg}
      />
      <div className="qz-tab-bar">
        <button className="qz-tab" onClick={() => onTabClick('all-quiz')}>
          All quiz
        </button>
        <button className="qz-tab" onClick={() => onTabClick('my-quiz')}>
          My quiz
        </button>
      </div>
      {tabType === 'all-quiz' && <AllQuizzes />}
      {tabType === 'my-quiz' && (
        <>
          <MyQuizzes />
          <CreationForm />
        </>
      )}
    </div>
  )
}

export default Quizzes
