import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import List from './Reviews.styled';
import fetch from '../../services/fetch';
import Loader from '../Loader/Loader';
import NoDataMessage from '../NoDataMessage/NoDataMessage';

function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      return;
    }

    fetch('movieReviews', '', '', id)
      .then(data => {
        setReviews(data.results);
        setLoading(false);
      })
      .catch(error => {
        toast.error(`Error fetching data: ${error.message}`);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  const showCast = Array.isArray(reviews) && reviews.length > 0;

  return showCast ? (
    <List>
      {reviews.map(({ id: key, author, content }) => (
        <li key={key}>
          <h3>{author}:</h3>
          <p>{content}</p>
        </li>
      ))}
    </List>
  ) : (
    <NoDataMessage />
  );
}

export default Reviews;
