import React from 'react';
import { cleanup, render } from 'react-testing-library';
import PersonPage from './PersonPage';

import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

const renderPersonForm = (args) => {
  const defaultProps = {
    name: 'John Johnson',
    email: 'john@gmail.com',
    phone: '+4672832452',
    company: {
      id: 13,
      photoUrl:
        'http://3.bp.blogspot.com/-5OlWa8qJ2FA/UeEQfg331QI/AAAAAAAAE7A/dt7Y-4Sr3ow/s1600/Fatboy+SLim+-+copie.jpg',
      name: 'Mohammad Wells',
      phone: '342.330.1927 x0355',
      email: 'Arne@norwood.io',
      companyId: 3,
    },
  };
  const props = { ...defaultProps, ...args };
  return render(
    <Router>
      <PersonPage {...props} />
    </Router>
  );
};

it('should render props', () => {
  const { getByText } = renderPersonForm();
  getByText('John Johnson');
});
