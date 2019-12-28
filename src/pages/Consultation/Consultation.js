/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { saveConsultation } from '../../actions';

import Select from '../../components/select';
import NavBar from '../../components/navbar';
import Button from '../../components/button';

const styles = theme => ({
  input: {
    margin: theme.spacing(0),
    height: 10,
    width: 300,
  },
  inputLong: {
    margin: theme.spacing(0),
    height: 10,
    width: 569,
  },
  labelRoot: {
    fontSize: 13,
    '&$labelFocused': {
      color: '#075d8f',
    },
  },
});

class Consultation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: null,
      skypeId: '',
      age: null,
      country: '',
      degree: '',
      otherDegree: '',
      schoolStartDate: null,
      countryOfInterest: null,
      otherCountryOfInterest: '',
      standardizedTest: '',
      englishTest: '',
      gpa: '',
      dreamSchool: '',
      biggestObstacles: '',
      strengths: '',
      weakness: '',
      areasOfHelp: '',
      additionalInformation: '',
      referral: '',
    };

    this.onChange = this.onChange.bind(this);
    this.defaultDate = this.defaultDate.bind(this);
    this.saveConsultationForm = this.saveConsultationForm.bind(this);
  }

  onChange(e) {
    const { name, value } = e.target;
    try {
      this.setState({ [name]: value });
    } catch (error) {
      console.log(error);
    }
  }

  saveConsultationForm(e) {
    e.preventDefault();
    this.props.saveConsultation(this.state);
  }

  defaultDate() {
    const dateNow = new Date();
    const year = dateNow.getFullYear();
    const monthWithOffset = dateNow.getUTCMonth() + 1;
    const month = monthWithOffset.toString().length < 2
      ? `0${monthWithOffset}`
      : monthWithOffset;
    const date = dateNow.getUTCDate().toString().length < 2
      ? `0${dateNow.getUTCDate()}`
      : dateNow.getUTCDate();

    return `${year}-${month}-${date}`;
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      skypeId,
      age,
      country,
      degree,
      otherDegree,
      schoolStartDate,
      countryOfInterest,
      otherCountryOfInterest,
      standardizedTest,
      englishTest,
      gpa,
      dreamSchool,
      biggestObstacles,
      strengths,
      weakness,
      areasOfHelp,
      additionalInformation,
      referral,
    } = this.state;
    const { classes } = this.props;
    return (
      <div className="consultation">
        <NavBar className="navbar__transparent-black" black />
        <div className="consultation-page-image">
          <img
            src="https://edwardconsulting.s3.eu-central-1.amazonaws.com/pexels-photo-935948+(1).jpeg"
            alt="approach"
          />
        </div>
        <div className="consultation-page-form">
          <div className="consultation-page-form-title">
            <div />
            <div className="consultation-form-main-title">
              Welcome to Edward Consulting
            </div>
            <div className="consultation-form-quote">
              Let’s get you started on your journey to your dream school
            </div>
          </div>
          <div className="consultation-form-area">
            <div className="consultation-form-area-one">
              <TextField
                id="firstName"
                name="firstName"
                type="text"
                label="First Name"
                variant="outlined"
                onChange={this.onChange}
                value={firstName}
                InputProps={{ classes: { input: classes.input } }}
                InputLabelProps={{ classes: { root: classes.labelRoot } }}
              />
              <TextField
                id="lastName"
                name="lastName"
                type="text"
                label="Last Name"
                variant="outlined"
                onChange={this.onChange}
                value={lastName}
                InputProps={{ classes: { input: classes.input } }}
                InputLabelProps={{ classes: { root: classes.labelRoot } }}
              />
              <TextField
                id="email"
                name="email"
                type="email"
                label="Email"
                variant="outlined"
                onChange={this.onChange}
                value={email}
                InputProps={{ classes: { input: classes.input } }}
                InputLabelProps={{ classes: { root: classes.labelRoot } }}
              />
              <TextField
                id="phone"
                name="phone"
                type="number"
                label="Phone No"
                variant="outlined"
                onChange={this.onChange}
                value={phone}
                InputProps={{ classes: { input: classes.input } }}
                InputLabelProps={{ classes: { root: classes.labelRoot } }}
              />
              <TextField
                id="skypeId"
                name="skypeId"
                type="text"
                label="Skype Id"
                variant="outlined"
                onChange={this.onChange}
                value={skypeId}
                InputProps={{ classes: { input: classes.input } }}
                InputLabelProps={{ classes: { root: classes.labelRoot } }}
              />
              <TextField
                id="age"
                name="age"
                type="number"
                label="Age"
                variant="outlined"
                onChange={this.onChange}
                value={age}
                InputProps={{ classes: { input: classes.input } }}
                InputLabelProps={{ classes: { root: classes.labelRoot } }}
              />
              <TextField
                id="country"
                name="country"
                type="text"
                label="Country of Origin"
                variant="outlined"
                onChange={this.onChange}
                value={country}
                InputProps={{ classes: { input: classes.input } }}
                InputLabelProps={{ classes: { root: classes.labelRoot } }}
              />
            </div>
            <div className="consultation-form-area-two">
              <Select
                onChange={this.onChange}
                label="What degree(s) are you interested in applying for?"
                value={degree}
                name="degree"
              />
              {degree === 'other' && (
                <TextField
                  id="otherDegree"
                  name="otherDegree"
                  type="text"
                  label="Other Degree"
                  variant="outlined"
                  onChange={this.onChange}
                  value={otherDegree}
                  InputProps={{ classes: { input: classes.inputLong } }}
                  InputLabelProps={{ classes: { root: classes.labelRoot } }}
                />
              )}
              <TextField
                id="schoolStartDate"
                name="schoolStartDate"
                type="date"
                label="When do you want to begin school? E.g. August 2021"
                variant="outlined"
                placeholder="School start date"
                onChange={this.onChange}
                value={schoolStartDate}
                defaultValue={this.defaultDate()}
                InputProps={{ classes: { input: classes.inputLong } }}
                InputLabelProps={{ classes: { root: classes.labelRoot } }}
              />
              <Select
                onChange={this.onChange}
                label="What country or countries are you interested in conducting your studies in?"
                value={countryOfInterest}
                name="countryOfInterest"
              />
              {countryOfInterest === 'other' && (
                <TextField
                  id="otherCountryOfInterest"
                  name="otherCountryOfInterest"
                  type="text"
                  label="Other Country Of Interest"
                  variant="outlined"
                  onChange={this.onChange}
                  value={otherCountryOfInterest}
                  InputProps={{ classes: { input: classes.inputLong } }}
                  InputLabelProps={{ classes: { root: classes.labelRoot } }}
                />
              )}
              <TextField
                id="standardizedTest"
                name="standardizedTest"
                type="text"
                label="Have you taken a standardized test? If so, what exam and what did you score?"
                variant="outlined"
                onChange={this.onChange}
                value={standardizedTest}
                InputProps={{ classes: { input: classes.inputLong } }}
                InputLabelProps={{ classes: { root: classes.labelRoot } }}
              />
              <Select
                onChange={this.onChange}
                label="Have you taken TOEFL or IELTS?"
                value={englishTest}
                name="englishTest"
              />
              <TextField
                id="gpa"
                name="gpa"
                type="text"
                label="What is your GPA ( high school, undergraduate or graduate)?"
                variant="outlined"
                onChange={this.onChange}
                value={gpa}
                InputProps={{ classes: { input: classes.inputLong } }}
                InputLabelProps={{ classes: { root: classes.labelRoot } }}
              />
              <TextField
                id="dreamSchool"
                name="dreamSchool"
                type="text"
                label="What is your dream school?"
                variant="outlined"
                onChange={this.onChange}
                value={dreamSchool}
                InputProps={{ classes: { input: classes.inputLong } }}
                InputLabelProps={{ classes: { root: classes.labelRoot } }}
              />
              <TextField
                id="biggestObstacles"
                name="biggestObstacles"
                type="text"
                label="What are your biggest obstacles to getting into your dream school?"
                variant="outlined"
                multiline
                onChange={this.onChange}
                value={biggestObstacles}
                InputProps={{ classes: { input: classes.inputLong } }}
                InputLabelProps={{ classes: { root: classes.labelRoot } }}
              />
              <TextField
                id="strengths"
                name="strengths"
                type="text"
                label="What do you think your strengths are as a potential student?"
                variant="outlined"
                multiline
                onChange={this.onChange}
                value={strengths}
                InputProps={{ classes: { input: classes.inputLong } }}
                InputLabelProps={{ classes: { root: classes.labelRoot } }}
              />
              <TextField
                id="weakness"
                name="weakness"
                type="text"
                label="What do you think are your areas of weakness?"
                variant="outlined"
                multiline
                onChange={this.onChange}
                value={weakness}
                InputProps={{ classes: { input: classes.inputLong } }}
                InputLabelProps={{ classes: { root: classes.labelRoot } }}
              />
              <TextField
                id="areasOfHelp"
                name="areasOfHelp"
                type="text"
                label="What do you need help with?"
                variant="outlined"
                multiline
                onChange={this.onChange}
                value={areasOfHelp}
                InputProps={{ classes: { input: classes.inputLong } }}
                InputLabelProps={{ classes: { root: classes.labelRoot } }}
              />
              <TextField
                id="additionalInformation"
                name="additionalInformation"
                type="text"
                label="Additional information (e.g interested concentration, climate preference, work experience e.t.c)"
                variant="outlined"
                multiline
                onChange={this.onChange}
                value={additionalInformation}
                InputProps={{ classes: { input: classes.inputLong } }}
                InputLabelProps={{ classes: { root: classes.labelRoot } }}
              />
              <TextField
                id="referral"
                name="referral"
                type="text"
                label="How did you hear about us?"
                variant="outlined"
                onChange={this.onChange}
                value={referral}
                InputProps={{ classes: { input: classes.inputLong } }}
                InputLabelProps={{ classes: { root: classes.labelRoot } }}
              />
            </div>
            <Button
              name="Submit"
              className="consultation-button button"
              onSave={this.saveConsultationForm}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  connect(null, { saveConsultation }),
)(Consultation);