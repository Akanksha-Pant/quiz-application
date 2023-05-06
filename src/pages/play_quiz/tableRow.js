import React from 'react'

const TableRow = ({ questionTitle, correctOption, value, points, index }) => {
  return (
    <tr className="pq-table__row">
      <td className="pq-table__cell"> {questionTitle}</td>
      <td className="pq-table__cell"> {value} </td>
      <td className="pq-table__cell"> {correctOption}</td>
      <td className="pq-table__cell">
        {' '}
        {correctOption === value ? points : 0}{' '}
      </td>
    </tr>
  )
}

export default TableRow
