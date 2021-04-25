import React, { useState } from 'react';
import ReactAutocomplete from 'react-autocomplete';

function App() {
  const [inputValue, setInputValue] = useState();

  return (
    <ReactAutocomplete
      items={[
        { id: 'foo', label: 'foo' },
        { id: 'bar', label: 'bar' },
        { id: 'baz', label: 'baz' },
      ]}
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
