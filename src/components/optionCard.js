import React from 'react'

const OptionCard = ({
  optionTitle,
  index,
  name,
  handleInputChange,
  checked,
}) => {
  console.log(checked)
  return (
    <div className={`qz-option`}>
      <input
        type="radio"
        name={name}
        onChange={(e) => handleInputChange(e)}
        value={optionTitle}
        checked={checked}
      />
      <label>{optionTitle}</label>
    </div>
  )
}

export default OptionCard
