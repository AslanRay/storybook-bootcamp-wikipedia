import React from 'react';
import Container from '../../components/container/Container';
import Autocomplete from '../../components/autocomplete/Autocomplete';

const Home = () => (
  <Container>
    {({ searchValue, onSearchChange, articles }) => (
      <Autocomplete
        articles={articles}
        onSearchChange={onSearchChange}
        searchValue={searchValue}
      />
    )}
  </Container>
);

export default Home;
