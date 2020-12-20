import React from 'react';
import PropTypes from 'prop-types';

import TextInputComponent from '../TextInput/TextInput.component';

import errorIcon from '../../images/icon-error.svg';

const EmailInputContainer = (
  {
    value,
    type = 'text',
    setValue,
    name,
    wasFormSubmitted,
    placeholder,
  },
) => {
  const onChange = (e) => setValue(e.target.value);
  const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const error = wasFormSubmitted && (!value || !isValidEmail(value));

  return (
    <div className="input-error-container">
      <div className={`input-container ${error ? 'error' : ''}`}>
        <TextInputComponent
          value={value}
          type={type}
          onChange={onChange}
          name={name}
          placeholder={error ? 'email@example/com' : placeholder}
        />
        { error ? <img className="error-image" src={errorIcon} alt="error-icon" /> : undefined }
      </div>
      { error && (
        <p className="error-submit-message">
          { `${placeholder} cannot be empty` }
        </p>
      )}
    </div>
  );
};

EmailInputContainer.defaultProps = {
  value: '',
  type: 'text',
};

EmailInputContainer.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  wasFormSubmitted: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default EmailInputContainer;
