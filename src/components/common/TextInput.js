import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextInput = (props) => {
  const { error, label, id, name, value, onChange, onBlur, onFocus } = props;
  const Input = styled.input`
    width: 100%;
    font-size: 14px;
    padding: 6px 8px;
    border-width: 1px;
    border-style: solid;
    border-color: ${error.length > 0 ? 'red' : 'black'};
    margin: 0;
  `;

  return (
    <div className="form-group row">
      <label className="col-lg-3 col-form-label form-control-label">
        {label}
      </label>
      <div className="col-lg-9">
        <Input
          type="text"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        <div className="invalid-feedback">{error[0]}</div>
      </div>
    </div>
  );
};

TextInput.defaultProps = {
  onBlur: () => {},
  onFocus: () => {},
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

export default TextInput;
