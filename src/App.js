import React, { useState } from 'react';
import ReactAutocomplete from 'react-autocomplete';
import useSearch from './hooks';

function App() {
  const [inputValue, setInputValue] = useState('');
  const { articles } = useSearch(inputValue);

  return (
    <ReactAutocomplete
      items={articles}
      shouldItemRender={(item, value) => item.label.toLowerCase()
        .indexOf(value.toLowerCase()) > -1}
      getItemValue={(item) => item.label}
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
