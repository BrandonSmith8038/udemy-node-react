// Shows users their form inputs for review

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const renderFields = formFields.map(({ label, name }, i) => {
    return (
      <div key={i}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please Review Your Entries</h5>
      <div>{renderFields}</div>
      <div style={{ marginTop: '15px' }}>
        <button
          className="yellow white-text darken-3 btn-flat"
          onClick={onCancel}
        >
          Back
        </button>
        <button
          className="green right white-text btn-flat"
          onClick={() => submitSurvey(formValues, history)}
        >
          Send Survey
          <i className="material-icons right">email</i>
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
