import PropTypes from 'prop-types';

import Btn from './LoadBtn.styled';

function LoadBtn({ onLoadMore }) {
  return <Btn onClick={onLoadMore}>Load more</Btn>;
}

LoadBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired
};

export default LoadBtn;
