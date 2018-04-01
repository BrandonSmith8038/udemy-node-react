import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails'
import formFields from './formFields'

class SurveyForm extends Component {
  
  renderFields(){
    return(
      formFields.map(({name, label}, i) => {
        return (
          <Field
            key={i}
            label={label}
            type="text"
            name={name}
            component={SurveyField}
          />
        )
      })
    )
  }
  
  render(){
    return(
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {this.renderFields()}
          <button className="btn-flat waves-effect-light teal right white-text" type="submit">
            Next
            <i className="material-icons right">done</i>
          </button>
          <Link to="/surveys" className="btn-flat waves-effect-light red left white-text">
            Cancel
          </Link>
        </form>
      </div>
    )
  }
  
}

function validate(values){
  const errors = {}
  
  errors.emails = validateEmails(values.emails || '')
  
  formFields.forEach(({ name }) => {
    if(!values[name]){
      errors[name] = 'You Must Provide A Value'
    }
  })
  
  
  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm)