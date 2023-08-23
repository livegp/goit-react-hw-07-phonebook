import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import GalleryList from '../components/GalleryList/GalleryList';
import useDataFetching from '../services/useDataFetching';

function Movies() {
  const [searchQuery, setSearchQuery] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');
    if (query !== null) {
      setSearchQuery(prevQuery => (prevQuery !== query ? query : prevQuery));
    }
  }, [location]);

  const { results, loading, total, handleLoadMore } = useDataFetching(
    'searchMovies',
    searchQuery,
    1
  );

  let title;
  if (searchQuery !== null) {
    title = `Nothing was found for the search query "${searchQuery}".`;
    if (Array.isArray(results) && results.length > 0) {
      title = `You searched for "${searchQuery}"`;
    }
  } else {
    title = 'Enter a query to search';
  }

  return (
    <GalleryList
      results={results}
      title={title}
      loading={loading}
      onLoadMore={handleLoadMore}
      total={total}
    />
  );
}

export default Movies;
