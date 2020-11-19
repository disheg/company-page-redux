import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as companiesActions from '../../redux/actions/companiesActions';
import * as peopleActions from '../../redux/actions/peopleActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Spinner from '../common/Spinner';

const PeoplePage = ({ companies, people, actions, loading }) => {
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
    <div className="container-fluid">
      <h1>People</h1>
      <table className="table">
        <thead>
          <tr>
            <th scopre="col">Name</th>
            <th scopre="col">Company</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => {
            const company = companies.find(
              ({ id }) => parseInt(id, 10) === parseInt(person.companyId, 10)
            );
            return (
              <tr key={person.id + person.name}>
                <td>
                  <Link to={`/people/${person.id}`}>{person.name}</Link>
                </td>
                <td>
                  <Link to={`/companies/${company.id}`}>{company.name}</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

PeoplePage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(PeoplePage);
