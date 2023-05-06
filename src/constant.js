import postQuizBanner from './img/play_quiz/postQuizBanner.png'
import preQuizBanner from './img/play_quiz/preQuizBanner.png'
import quizBanner from './img/play_quiz/quizBanner.png'

export const tableHeaders = [
  'Question Title',
  'Your Response',
  'Correct Response',
  'Points Scored',
]

export const optionModifierColors = ['blue', 'green', 'red', 'yellow']

export const stateToHeaderData = {
  postQuiz: {
    title: 'Feedback',
    description:
      'Looks  like you have  already  played this quiz.' +
      'Review your score and answers ',
    img: postQuizBanner,
  },
  quiz: {
    title: 'Play and Score',
    description: 'Select the correct option out of four' + 'and score points ',
    img: quizBanner,
  },
  preQuiz: {
    title: 'Instructions',
    description:
      'Carefully read and understand the' +
      'instructions to score maximum points',
    img: preQuizBanner,
  },
}

export const instructions = (duration, points) => {
  return [
    `The duration for this quiz is ${duration} mins`,
    `This quiz consists of ${points} points`,
    `Do not refresh or reload the page before test is over`,
    `Check your feedback once you are done with the test`,
  ]
}
