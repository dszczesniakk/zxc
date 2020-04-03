import axios from 'axios';
import { HOST } from '../config/static';

export const getSportArticles = async () => {
  return await axios.get(`${HOST}/articles/sports`)
    .then((response) => {
      return response.data.articles;
    })
  };

  export const getFashionArticles = async () => {
    return await axios.get(`${HOST}/articles/fashion`)
      .then((response) => {
        return response.data.articles;
      })
    };