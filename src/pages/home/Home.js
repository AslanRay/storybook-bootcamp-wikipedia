import React from 'react';
import Container from '../../components/container/Container';
import Autocomplete from '../../components/autocomplete/Autocomplete';
import WikiLogo from '../../assets/img/Wikipedia-logo-v2.svg';
import './home.scss';

const Home = () => (
  <div className="home-page-container">
    <img src={WikiLogo} alt="Wikipedia logo" />
    <Container>
      {({ searchValue, onSearchChange, articles }) => (
        <Autocomplete
          articles={articles}
          onSearchChange={onSearchChange}
          searchValue={searchValue}
        />
      )}
    </Container>
  </div>
);

export default Home;
