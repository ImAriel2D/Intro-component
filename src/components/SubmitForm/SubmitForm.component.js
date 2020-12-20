import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TextInputContainer from '../TextInput';
import EmailInputContainer from '../EmailInput';

import './styles/submitform.scss';

const SubmitFormComponent = ({ submit }) => {
  const [name, setName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [wasFormSubmitted, setWasFormSubmitted] = useState(false);

  return (
    <div className="form-container">
      <form className="submit-form" onSubmit={submit}>
        <TextInputContainer
          value={name}
          setValue={setName}
          name="name"
          placeholder="First Name"
          wasFormSubmitted={wasFormSubmitted}
        />
        <TextInputContainer
          value={lastName}
          setValue={setLastName}
          name="lastName"
          placeholder="Last Name"
          wasFormSubmitted={wasFormSubmitted}
        />
        <EmailInputContainer
          value={email}
          setValue={setEmail}
          name="email"
          placeholder="Email"
          wasFormSubmitted={wasFormSubmitted}
        />
        <TextInputContainer
          value={password}
          setValue={setPassword}
          type="password"
          name="password"
          placeholder="Password"
          wasFormSubmitted={wasFormSubmitted}
        />
        <button className="submit-btn" onClick={() => setWasFormSubmitted(true)} type="submit">
          CLAIM YOUR FREE TRIAL
        </button>
        <p id="terms-of-condition">
          By clicking the button, you are agreeing to our
          <span> Terms and Services</span>
        </p>
      </form>
    </div>
  );
};

SubmitFormComponent.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default SubmitFormComponent;
