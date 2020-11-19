import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import * as companiesActions from '../../redux/actions/companiesActions';
import * as peopleActions from '../../redux/actions/peopleActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Spinner from '../common/Spinner';
import PersonForm from './PersonForm';

const ManagePersonForm = ({ companies, actions, loading, ...props }) => {
  const [errors, setErrors] = useState({
    firstName: [],
    lastName: [],
    email: [],
    phone: [],
    companyId: [],
  });
  const [person, setPerson] = useState({
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    salary: null,
    companyId: null,
    photoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzOpl3-kqfNbPcA_u_qEZcSuvu5Je4Ce_FkTMMjxhB-J1wWin-Q',
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const memoizedSalary = useMemo(() => {
    const setSalary = (companyId) => `${1000 * companyId}$`;
    return setSalary(person.companyId);
  }, [person.companyId]);

  useEffect(() => {
    if (companies.length === 0)
      actions.loadCompanies().catch((error) => {
        alert('Companies loading failed ' + error);
      });
  }, [companies]);

  const handleChange = useCallback(
    (e) => {
      setPerson({
        ...person,
        [e.target.name]: e.target.value,
      });
    },
    [person, setPerson]
  );

  const isValid = () => {
    const errorsValid = {
      firstName: [],
      lastName: [],
      email: [],
      phone: [],
      companyId: [],
    };
    if (!person.firstName) {
      errorsValid.firstName.push('First name is required!');
    }
    if (!person.lastName) errorsValid.lastName.push('Last name is required');
    if (!person.email) errorsValid.email.push('Email is required');
    if (!person.phone) errorsValid.phone.push('Phone is required');
    if (!person.companyId) errorsValid.companyId.push('Choose a company');

    setErrors(errorsValid);

    return Object.keys(errors).every((el) => errorsValid[el].length === 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    const { history } = props;
    if (!isValid()) return;
    if (isSubmit) return;
    setIsSubmit(true);
    actions
      .savePerson({
        id: null,
        name: `${person.firstName} ${person.lastName}`,
        phone: person.phone,
        email: person.email,
        companyId: person.companyId,
        salary: memoizedSalary,
      })
      .then(() => history.push('/people'));
  };

  const onFocus = useCallback(() => {
    const { phone } = person;
    if (phone[0] === '+') {
      setPerson({
        ...person,
        phone: `07${phone.slice(5)}`,
      });
    }
  }, [person.phone]);

  const onBlur = useCallback(() => {
    const { phone } = person;
    if (phone.length === 10) {
      setPerson({
        ...person,
        phone: `+467 ${phone.slice(2)}`,
      });
    }
  }, [person.phone]);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <PersonForm
        person={person}
        errors={errors}
        companies={companies}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </>
  );
};

ManagePersonForm.propTypes = {
  companies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    companies: state.companies,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCompanies: bindActionCreators(
        companiesActions.loadCompanies,
        dispatch
      ),
      savePerson: bindActionCreators(peopleActions.savePerson, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePersonForm);
