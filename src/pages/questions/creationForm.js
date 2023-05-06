import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Field from '../../components/field'
import questionInstance from '../../services/quizQuestion'
import { createQuestionFormPayload } from '../../utils'

const OptionUi = ({ index }) => {
  return (
    <input
      required
      name={`option-${index}`}
      className="field-input qs-option"
    />
  )
}

const CreationForm = ({ handleOnClose }) => {
  const [noOfOptions, setOptions] = useState(3)
  const { quizId } = useParams()

  const handleOnChange = (event) => {
    setOptions(parseInt(event.target.value))
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault()
    const payload = createQuestionFormPayload(quizId)
    await questionInstance.createQuestion(payload)
  }

  return (
    <div>
      <div className="qp-modal__header"> Add Question</div>
      <div className="qp-modal__sub-header">
        Create a new multiple choice question for your quiz
      </div>

      <form onSubmit={handleOnSubmit} id="question-form">
        <Field label="Title">
          <input name="title" className="field-input" required />
        </Field>
        <Field label="Description">
          <input name="description" className="field-input" required />
        </Field>
        <div className="row qp-select-row">
          <Field label="No of options" className="qp-select">
            <select
              onChange={handleOnChange}
              name="totalOptions"
              required
              className="field-input field-select"
            >
              <option value={3}> 3 </option>
              <option value={4}> 4 </option>
              <option value={5}> 5 </option>
            </select>
          </Field>
          <Field label="Correct option" className="qp-select">
            <select
              onChange={handleOnChange}
              name="correctOption"
              required
              className="field-input field-select"
            >
              {Array.from(Array(noOfOptions).keys()).map((el) => (
                <option value={el}> {el + 1}</option>
              ))}
            </select>
          </Field>
        </div>
        <Field label="Points">
          <input name="points" className="field-input" required />
        </Field>
        {noOfOptions > 0 && (
          <div>
            <div className="field-label m-t-10"> Add options</div>
            {Array.from(Array(noOfOptions).keys()).map((el) => (
              <OptionUi key={el} index={el} />
            ))}
          </div>
        )}
        <div className="qp-btn-bar">
          <button
            type="button"
            onClick={() => handleOnClose()}
            className="btn-primary"
          >
            Close Modal
          </button>
          <button
            type="submit"
            onClick={handleOnSubmit}
            className="btn-secondary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreationForm
