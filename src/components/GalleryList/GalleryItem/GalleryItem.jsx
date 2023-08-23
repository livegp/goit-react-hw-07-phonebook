import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import Container from './GalleryItem.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

function GalleryItem({ post }) {
  const { id, poster_path: poster, title } = post;
  const location = useLocation();

  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
  const url = poster ? `${POSTER_URL}${poster}` : defaultImg;

  return (
    <Container>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img src={url} width={250} alt={title} role="presentation" />
      </Link>
    </Container>
  );
}

GalleryItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default GalleryItem;
