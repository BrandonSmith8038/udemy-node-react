// Shows users their form inputs for review

import React from 'react'
import { connect } from 'react-redux'
import formFields from './formFields'


const SurveyReview = ({ onCancel, formValues }) => {
  
  const renderFields = formFields.map(({ label, name }, i) => {
    return (
      <div key={i}>
        <label>{label}</label>  
        <div>
        {formValues[name]}
        </div>
      </div>
    )
  })
  
  return(
    <div>
      <h5>Please Review Your Entries</h5>
      <div>
        {renderFields}
      </div>
      <button
        className="yellow darken-3 btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
    </div>
  )
}

function mapStateToProps(state){
  return {formValues: state.form.surveyForm.values}
}

export default connect(mapStateToProps)(SurveyReview)