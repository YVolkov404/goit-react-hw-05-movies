import axios from 'axios';

export const options = {
  method: 'GET',
  baseURL: `https://api.themoviedb.org/3`,
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWY4MjE0MjFmZjFiYTI4YTA4NWQ0ZmMzNGIzODc3MyIsInN1YiI6IjY1NmI1NjU0ODgwNTUxMDBjNjgwOTRiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.02SS9fXzLQaZd6N-vvi5WdX-yPJGCequtM6X_NfRkwQ',
  },
};

export const fetchTrending = async query => {
  const response = await axios(`/trending/movie/week`, options);

  return response.data;
};

export const fetchDetails = async movieId => {
  const response = await axios(`/trending/movie/${movieId}`, options);

  return response.data;
};

export const fetchCredits = async movieId => {
  const response = await axios(`/trending/movie/${movieId}/credits`, options);

  return response.data;
};

export const fetchReviews = async movieId => {
  const response = await axios(`/trending/movie/${movieId}/reviews`, options);

  return response.data;
};
