import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as companiesActions from '../../redux/actions/companiesActions';
import * as peopleActions from '../../redux/actions/peopleActions';
import PersonPage from './PersonPage';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Spinner from '../common/Spinner';

const ManagePersonPage = ({ person, company, companies, people, actions }) => {
  useEffect(() => {
    if (companies.length === 0)
      actions.loadCompanies().catch((error) => {
        alert('Companies loading failed ' + error);
      });

    if (people.length === 0)
      actions.loadPeople().catch((error) => {
        alert('People loading failed ' + error);
      });
  }, [companies, people]);

  return person.id && company.id ? (
    <PersonPage
      name={person.name}
      email={person.email}
      phone={person.phone}
      company={company}
    />
  ) : (
    <Spinner />
  );
};

ManagePersonPage.propTypes = {
  person: PropTypes.object.isRequired,
  company: PropTypes.object.isRequired,
  companies: PropTypes.array.isRequired,
  people: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function getPersonById(people, id) {
  return people.find((person) => person.id === parseInt(id, 10));
}

function getCompanyById(companies, id) {
  return companies.find((company) => company.id === parseInt(id, 10));
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  const person =
    state.people.length === 0 ? {} : getPersonById(state.people, id);
  const company =
    state.companies === 0 && !state.person
      ? {}
      : getCompanyById(state.companies, person.companyId);
  console.log(person);
  return {
    company,
    person,
    companies: state.companies,
    people: state.people,
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
      loadPeople: bindActionCreators(peopleActions.loadPeople, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePersonPage);
