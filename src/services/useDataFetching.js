import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import fetch from './fetch';

const useDataFetching = (endpoint, searchIn, initialPage = 1) => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(searchIn);

  const fetchData = () => {
    setLoading(true);

    fetch(endpoint, search, page)
      .then(newData => {
        setTotal(newData.total_results);
        setResults(prevResults =>
          page === 1 ? newData.results : [...prevResults, ...newData.results]
        );
        setLoading(false);
      })
      .catch(error => {
        toast.error(`Error fetching data: ${error.message}`);
        setLoading(false);
      });
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (search !== searchIn) {
      setPage(1);
      setResults([]);
      setSearch(searchIn);
    }
    fetchData();
  }, [searchIn, page, search]); // eslint-disable-line

  return {
    results,
    loading,
    total,
    handleLoadMore
  };
};

export default useDataFetching;
