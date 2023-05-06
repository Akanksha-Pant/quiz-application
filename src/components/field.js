import React from 'react'

const Field = ({ children, label, className = '' }) => {
  return (
    <div className={`field ${className}`}>
      <label className="field-label"> {label} </label>
      {children}
    </div>
  )
}

export default Field
