import React from 'react';
import PropTypes from 'prop-types';

import './styles/textinput.scss';

const TextInputComponent = (
  {
    value,
    onChange,
    type,
    name,
    placeholder,
  },
) => (
  <input
    className="text-input"
    type={type}
    value={value}
    onChange={onChange}
    name={name}
    autoComplete="off"
    placeholder={placeholder}
  />
);

TextInputComponent.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextInputComponent;
