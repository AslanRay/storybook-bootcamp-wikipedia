import React, { useState } from 'react';
import ReactAutocomplete from 'react-autocomplete';
import { useSearch, useDebounce } from './hooks';
import Input from './components/input/Input';

function App() {
  const [inputValue, setInputValue] = useState('');
  const { articles } = useSearch(useDebounce(inputValue));

  return (
    <ReactAutocomplete
      items={articles}
      renderInput={Input}
      inputProps={{ placeholder: 'Input a search term' }}
      getItemValue={(item) => item.label}
      renderMenu={(children, value, style) => (
        <div style={{ ...style }} className="input-suggestion">
          {children}
          <a href={`/search?query=${value}`} className="search-link">
            See all results
          </a>
        </div>
      )}
      renderItem={(item, highlighted) => (
        <div
          key={item.id}
          style={{ backgroundColor: highlighted ? '#eee' : 'transparent' }}
        >
          {item.label}
        </div>
      )}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onSelect={(value) => setInputValue(value)}
    />
  );
}

export default App;
