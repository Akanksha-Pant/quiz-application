import React from 'react'

const QuestionCard = ({
  title,
  description,
  index,
  options,
  correctOption,
  points,
}) => {
  return (
    <div className="qp-card row">
      <div className="qp-card__index m-r-10"> {index} </div>
      <div className="qp-card__details col">
        <div className="qp-card__header row">
          {' '}
          {title}
          <div className="qp-card__points"> {points} </div>
        </div>
        <div> {description} </div>
        <div className="m-t-10">
          <strong>Options:</strong> {options.join(', ')}
        </div>
        <div className="m-t-10">
          <strong>Correct Option:</strong> {options[parseInt(correctOption)]}
        </div>
        <button className="btn-secondary qp-card__button"> Delete </button>
      </div>
    </div>
  )
}

export default QuestionCard
