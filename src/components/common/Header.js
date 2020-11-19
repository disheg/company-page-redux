import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as companiesActions from '../../redux/actions/companiesActions';
import * as peopleActions from '../../redux/actions/peopleActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import Spinner from '../common/Spinner';

const Header = ({ companies, people, actions, loading }) => {
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
    <header>
      <nav className="navbar navbar-expand-lg pink">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink exact to="/" className="nav-link">
              Logo
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/companies" className="nav-link">
              Companies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/people" className="nav-link">
              People
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add-person" className="nav-link">
              Add person
            </NavLink>
          </li>
        </ul>
        <div
          className="collapse navbar-collapse flex-grow-1 text-right"
          id="myNavbar"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <div className="nav-link m-2 menu-item">
                <div className="companiesCount">
                  Companies:
                  {companies ? companies.length : ''}
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link m-2 menu-item">
                <div className="peopleCount">
                  People:
                  {people ? people.length : ''}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
