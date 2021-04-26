import React, { useState, useEffect } from 'react';
import ReactAutocomplete from 'react-autocomplete';
import axios from 'axios';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [responseItems, setResponseItems] = useState([]);

  useEffect(() => {
    axios.get(`https://www.mediawiki.org/w/api.php?origin=*&action=opensearch&search=${inputValue}`)
      .then((response) => {
        const parsedResponse = [];
        for (let i = 0; i < response.data[1].length; i += 1) {
          parsedResponse.push({
            id: response.data[3][i],
            label: response.data[1][i],
          });
        }
        setResponseItems(parsedResponse);
      });
  }, [inputValue]);

  return (
    <ReactAutocomplete
      items={responseItems}
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
