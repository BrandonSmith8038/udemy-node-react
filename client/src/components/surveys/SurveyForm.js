import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'

const FIELDS = [
    {label: "Survey Title",name: "title"},
    {label: "Subject Line",name: "subject"},
    {label: "Email Body",name: "body"},
    {label: "Recipient List",name: "emails"},
  ]

class SurveyForm extends Component {
  
  renderFields(){
    return(
      FIELDS.map(({name, label}, i) => {
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
          onSubmit={this.props.handleSubmit(values => console.log(values))}
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

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm)