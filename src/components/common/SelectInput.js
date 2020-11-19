import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = (props) => {
  const { error, id, label, name, onChange, list } = props;
  let className = 'form-control';
  if (error.length > 0) className += ' is-invalid';
  return (
    <div className="form-group row">
      <label className="col-lg-3 col-form-label form-control-label">
        {label}
      </label>
      <div className="col-lg-9">
        <select
          id={id}
          className={className}
          name={name}
          onChange={onChange}
          size="0"
        >
          <option value="" />
          {list.map((company) => (
            <option key={company.id + company.name} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
        <div className="invalid-feedback">{error[0]}</div>
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectInput;
