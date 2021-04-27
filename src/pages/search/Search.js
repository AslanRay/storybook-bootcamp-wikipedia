import React from 'react';
import Container from '../../components/container/Container';
import Autocomplete from '../../components/autocomplete/Autocomplete';
import { useSearch } from '../../hooks';

const Search = ({ ...props }) => {
  const { search } = props.location;
  const params = new URLSearchParams(search);
  const query = params.get('query');
  const { articles, status } = useSearch(query, 5);

  return (
    <div>
      <Container>
        {({ searchValue, onSearchChange, articles: articleQuery }) => (
          <Autocomplete
            articles={articleQuery}
            onSearchChange={onSearchChange}
            searchValue={searchValue}
          />
        )}
      </Container>
      {
        !articles.length && status === 'SUCCESS'
          ? (
            <h3>
              {`No articles for query: ${query}`}
            </h3>
          )
          : articles.map((article) => (
            <div key={article.id}>
              <a href={article.id} target="_blank" rel="noreferrer">
                {article.label}
              </a>
            </div>
          ))

      }
    </div>
  );
};

export default Search;
