import React from 'react';
import { useDispatch } from 'react-redux';

import Form from './Filter.styled';
import { setFilter } from '../../redux/filterSlice';

function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  return (
    <Form>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" name="filter" onChange={handleFilterChange} />
    </Form>
  );
}

export default Filter;
