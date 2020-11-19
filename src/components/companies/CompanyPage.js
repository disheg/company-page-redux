import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as companiesActions from '../../redux/actions/companiesActions';
import * as peopleActions from '../../redux/actions/peopleActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Spinner from '../common/Spinner';

const CompanyPage = ({
  company,
  companies,
  peopleByCompanyId,
  people,
  actions,
}) => {
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

  return company && peopleByCompanyId ? (
    <div className="container-fluid">
      <div className="m-3">
        <h1>{company.name}</h1>
      </div>
      <div className="row">
        <div className="col-6">
          <h2>Address</h2>
          <p>{company.address}</p>
          <p>{company.postalcode}</p>
          <p>{company.city}</p>
          <p>{company.country}</p>
        </div>
        <div className="col-6">
          <h2>People</h2>
          {peopleByCompanyId.map((_people) => (
            <p key={_people.id + _people.name}>
              <Link to={`/people/${_people.id}`}>{_people.name}</Link>
            </p>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

CompanyPage.propTypes = {
  company: PropTypes.object.isRequired,
  peopleByCompanyId: PropTypes.array.isRequired,
  people: PropTypes.array.isRequired,
  companies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function getCompanyById(companies, id) {
  return companies.find((company) => company.id === parseInt(id, 10));
}

function getPeopleByCompanyId(people, id) {
  return people.filter((person) => person.companyId === parseInt(id, 10));
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  const company =
    state.companies.length === 0 ? null : getCompanyById(state.companies, id);
  const peopleByCompanyId =
    state.people.length === 0 ? null : getPeopleByCompanyId(state.people, id);
  return {
    peopleByCompanyId,
    company,
    companies: state.companies,
    people: state.people,
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

export default connect(mapStateToProps, mapDispatchToProps)(CompanyPage);
