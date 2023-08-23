import ky from 'ky';
import { toast } from 'react-toastify';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd1c21e798be8e69642bc9e5fdadcfaf6';

const DEFAULT_PARAMS = {
  api_key: API_KEY
};

async function fetch(endpoint, search, page, selected) {
  const ENDPOINTS = {
    trending: '/trending/movie/day',
    searchMovies: '/search/movie',
    movieDetails: `/movie/${selected}`,
    movieCredits: `/movie/${selected}/credits`,
    movieReviews: `/movie/${selected}/reviews`
  };

  const url = `${BASE_URL}${ENDPOINTS[endpoint]}`;
  const options = {
    searchParams: {
      ...DEFAULT_PARAMS,
      ...(selected ? {} : { page }),
      ...(search ? { query: search, page } : {})
    }
  };

  try {
    const response = await ky.get(url, options).json();
    return response;
  } catch (error) {
    toast.error(`Error fetching data: ${error.message}`);
    throw new Error(`API request failed: ${error.message}`);
  }
}

export default fetch;
