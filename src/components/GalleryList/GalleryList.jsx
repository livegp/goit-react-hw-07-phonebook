import PropTypes from 'prop-types';
import ScrollToTop from 'react-scroll-up';

import GalleryItem from './GalleryItem/GalleryItem';
import { Container, ScrollTopIcon, Title } from './GalleryList.styled';
import LoadBtn from '../LoadBtn/LoadBtn';
import Loader from '../Loader/Loader';

function GalleryList({ results, title, loading, onLoadMore, total }) {
  const showPoster = Array.isArray(results) && results.length > 0;
  return (
    <>
      <Title>{title}</Title>
      {showPoster && (
        <Container>
          {results.map(post => (
            <GalleryItem key={post.id} post={post} />
          ))}
        </Container>
      )}
      <ScrollToTop showUnder={160}>
        <ScrollTopIcon />
      </ScrollToTop>
      {loading && <Loader />}
      {!loading && results.length < total && (
        <LoadBtn onLoadMore={onLoadMore} />
      )}
    </>
  );
}

GalleryList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired
};

export default GalleryList;
