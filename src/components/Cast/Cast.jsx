import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { List } from './Cast.styled';
import fetch from '../../services/fetch';
import Loader from '../Loader/Loader';
import NoDataMessage from '../NoDataMessage/NoDataMessage';

function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      return;
    }

    fetch('movieCredits', '', '', id)
      .then(data => {
        setCast(data.cast);
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

  const showCast = Array.isArray(cast) && cast.length > 0;

  return showCast ? (
    <List>
      {cast.map(({ id: key, name }) => (
        <li key={key}>{name}</li>
      ))}
    </List>
  ) : (
    <NoDataMessage />
  );
}

export default Cast;
