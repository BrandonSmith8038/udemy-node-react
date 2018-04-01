// Shows users their form inputs for review

import React from 'react'

const SurveyReview = ({ onCancel }) => {
  return(
    <div>
      <h5>Please Review Your Entries</h5>
      <button
        className="yellow darken-3 btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
    </div>
  )
}

export default SurveyReview