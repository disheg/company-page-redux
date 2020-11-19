import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PersonPage = (props) => {
  const { name, email, phone, company } = props;
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4 img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzOpl3-kqfNbPcA_u_qEZcSuvu5Je4Ce_FkTMMjxhB-J1wWin-Q"
            alt=""
            className="img-rounded"
          />
        </div>
        <div className="col-md-6 details">
          <h2>{name}</h2>
          <Link to={`/companies/${company.id}`}>{company.name}</Link>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
};

PersonPage.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  company: PropTypes.object.isRequired,
};

export default PersonPage;
