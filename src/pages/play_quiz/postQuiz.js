import React from 'react'

import { tableHeaders } from '../../constant'
import Header from './header'
import TableRow from './tableRow'

const PostQuiz = ({
  title,
  bannerImg,
  previousResponse,
  description,
  points,
  duration,
}) => {
  const { quizResponse, score } = previousResponse
  const percentage = (score * 100) / points

  return (
    <div className="row">
      <Header quizState="postQuiz" />
      <div className="pq-content col">
        <div className="pq-content__header">
          Here is a detailed analysis for you
        </div>
        <div className="pq-content__description">
          We have analysed your response and we have prepeared a special report
          just for you
        </div>
        <div className="pq-content__details row">
          <div className="pq-content__details-box col">
            <div className="m-t-10">
              <strong>Quiz: </strong>
              {title}
            </div>
            <div className="m-t-10">
              <strong>Points: </strong>
              {points}
            </div>
            <div className="m-t-10">
              <strong>Duration: </strong>
              {duration}
            </div>
            <div className="m-t-10">
              <strong>Your score: </strong>
              {score}
            </div>
          </div>
          <div className="pq-content__details-box col">
            <div className="pq-content__details-header"> {percentage}% </div>
            <div className="center"> Congratulations ! You have done well </div>
            <div className="center">
              {' '}
              Please go and attempt our other quizzes !
            </div>
          </div>
        </div>
        <table className="pq-table">
          <tr className="pq-table__row">
            {tableHeaders.map((header) => (
              <th className="pq-table__header"> {header}</th>
            ))}
          </tr>
          {Object.keys(quizResponse).map((key) => (
            <TableRow {...quizResponse[key]} />
          ))}
        </table>
        <button className="btn-primary pq-btn"> Play new quizzes </button>
      </div>
    </div>
  )
}

export default PostQuiz
