import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import CompaniesPage from './companies/CompaniesPage';
import CompanyPage from './companies/CompanyPage';
import Header from './common/Header';
import PeoplePage from './people/PeoplePage';
import ManagePersonPage from './people/ManagePersonPage';
import ManagePersonForm from './people/ManagePersonForm';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import Spinner from './common/Spinner';

const HeaderStyled = styled.header`
  max-width: 850px;
  margin: 0 auto;
`;
const Container = styled.div`
  background-image: url(${(props) => props.image});
  max-width: 850px;
  margin: 0 auto;
`;

function App() {
  const [backgroundUrl, setBackgroundUrl] = useState(null);
  const [backgroundLoading, setBackgroundLoading] = useState(true);
  useEffect(() => {
    if (backgroundUrl) return;
    fetch('https://source.unsplash.com/random')
      .then((response) => {
        console.log(response);
        console.log(response.url);
        setBackgroundUrl(response.url);
      })
      .catch((err) => console.log(err));
    console.log(1);
    setBackgroundLoading(false);
  }, [backgroundUrl]);
  return backgroundLoading ? (
    <Spinner />
  ) : (
    <Container image={backgroundUrl}>
      <div className="container-fluid">
        <HeaderStyled>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/companies/:id" component={CompanyPage} />
              <Route path="/companies" component={CompaniesPage} />
              <Route path="/people/:id" component={ManagePersonPage} />
              <Route path="/people" component={PeoplePage} />
              <Route path="/add-person" component={ManagePersonForm} />
            </Switch>
          </div>
        </HeaderStyled>
      </div>
    </Container>
  );
}

export default App;
