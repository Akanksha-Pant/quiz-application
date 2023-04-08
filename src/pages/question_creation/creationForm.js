import React, { useState } from 'react'
import questionInstance from '../../services/quizQuestion'

const OptionUi = (index) => {
  console.log(index)
  return (
    <p>
      <input required name={`option-${index}`} />
    </p>
  )
}

const CreationForm = () => {
  const [noOfOptions, setOptions] = useState(3)

  const handleOnChange = (event) => {
    setOptions(parseInt(event.target.value))
    console.log(noOfOptions, typeof event.target.value)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    questionInstance.createQuestion()
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <p>
          <label> Title </label>
          <input />
        </p>
        <p>
          <label> Description </label>
          <input />
        </p>

        <p>
          <label> No of options </label>
          <select onChange={handleOnChange}>
            <option value={3}> 3 </option>
            <option value={4}> 4 </option>
            <option value={5}> 5 </option>
          </select>
        </p>
        {noOfOptions > 0 && (
          <>
            <p> Add options</p>
            {[...Array(noOfOptions)].map((e, index) => (
              <OptionUi key={index} index={index} />
            ))}
          </>
        )}
      </form>
    </div>
  )
}

export default CreationForm
