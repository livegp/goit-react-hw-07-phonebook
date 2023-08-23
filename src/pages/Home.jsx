import GalleryList from '../components/GalleryList/GalleryList';
import useDataFetching from '../services/useDataFetching';

function Home() {
  const title = 'In trend';

  const { results, loading, total, handleLoadMore } = useDataFetching(
    'trending',
    '',
    1
  );

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

export default Home;
