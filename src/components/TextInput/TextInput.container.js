import React from 'react';
import PropTypes from 'prop-types';

import TextInputComponent from './TextInput.component';

import errorIcon from '../../images/icon-error.svg';

const TextInputContainer = ({
  value, setValue, type = 'text', name, wasFormSubmitted, placeholder,
}) => {
  const onChange = (e) => setValue(e.target.value);
  const error = wasFormSubmitted && !value;

  return (
    <div className="input-error-container">
      <div className={`input-container ${error ? 'error' : ''}`}>
        <TextInputComponent
          value={value}
          onChange={onChange}
          type={type}
          name={name}
          placeholder={error ? '' : placeholder}
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

TextInputContainer.defaultProps = {
  value: '',
  type: 'text',
};

TextInputContainer.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  wasFormSubmitted: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextInputContainer;
