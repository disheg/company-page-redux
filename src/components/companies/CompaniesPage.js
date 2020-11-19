import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as companiesActions from '../../redux/actions/companiesActions';
import * as peopleActions from '../../redux/actions/peopleActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Spinner from '../common/Spinner';

const CompaniesPage = ({ companies, people, actions, loading }) => {
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

  return loading ? (
    <Spinner />
  ) : (
    <div className="jumbotron">
      <h1>Companies</h1>
      <ul>
        {companies.map(({ id, name }) => (
          <li key={id + name}>
            <Link to={`/companies/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

CompaniesPage.propTypes = {
  companies: PropTypes.array.isRequired,
  people: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesPage);
