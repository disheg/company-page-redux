import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const PersonForm = (props) => {
  const {
    person,
    errors,
    companies,
    handleChange,
    handleSubmit,
    onFocus,
    onBlur,
  } = props;
  return (
    <div className="container">
      <div className="card card-outline-secondary">
        <div className="card-header">
          <h3 className="mb-0">Contact Information</h3>
        </div>
        <div className="card-body">
          <form className="form" autoComplete="off" onSubmit={handleSubmit}>
            <TextInput
              id="firstName"
              name="firstName"
              label="First name*"
              error={errors.firstName}
              value={person.firstName}
              onChange={handleChange}
            />
            <TextInput
              id="lastName"
              name="lastName"
              label="Last name*"
              error={errors.lastName}
              value={person.lastName}
              onChange={handleChange}
            />
            <TextInput
              id="phone"
              name="phone"
              label="Phone*"
              onBlur={onBlur}
              error={errors.phone}
              value={person.phone}
              onChange={handleChange}
              onFocus={onFocus}
            />
            <TextInput
              id="email"
              name="email"
              label="Email*"
              error={errors.email}
              value={person.email}
              onChange={handleChange}
            />
            <SelectInput
              label="Choose company"
              id="companyId"
              name="companyId"
              error={errors.companyId}
              list={companies}
              onChange={handleChange}
            />
            <div className="form-group row">
              <div className="col-lg-9">
                <button type="submit" className="btn btn-primary">
                  Add person
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

PersonForm.propTypes = {
  person: PropTypes.object.isRequired,
  errors: PropTypes.objectOf(PropTypes.array).isRequired,
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default PersonForm;
