import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import axios from 'axios';

export const useSearch = (query, limit = 10) => {
  const [state, setState] = useState({
    articles: [],
    status: 'IDLE',
    error: '',
  });

  const cancelToken = useRef(null);

  useEffect(() => {
    if (query < 3) {
      return;
    }

    if (cancelToken.current) {
      cancelToken.current.cancel();
    }

    cancelToken.current = axios.CancelToken.source();

    axios.get(`https://www.mediawiki.org/w/api.php?origin=*&action=opensearch&search=${query}&limit=${limit}`, {
      cancelToken: cancelToken.current.token,
    })
      .then((response) => {
        const parsedResponse = [];
        for (let i = 0; i < response.data[1].length; i += 1) {
          parsedResponse.push({
            id: response.data[3][i],
            label: response.data[1][i],
          });
        }
        setState({
          articles: parsedResponse,
          status: 'SUCCESS',
          error: '',
        });
      }).catch((error) => {
        if (axios.isCancel(error)) {
          return;
        }

        setState({
          articles: [],
          status: 'ERROR',
          error,
        });
      });
  }, [query]);
  return state;
};

export const useDebounce = (value, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, value]);

  return debounceValue;
};

export const useSearchForm = () => {
  const [searchValue, setSearchValue] = useState('');

  const onSearchChange = useCallback((event) => setSearchValue(event.target.value), []);

  return {
    searchValue,
    onSearchChange,
  };
};
