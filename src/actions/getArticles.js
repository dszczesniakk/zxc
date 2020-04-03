import axios from 'axios';
import { HOST } from '../config/static';

export const getSportArticles = async () => {
  try {
    return await axios.get(`${HOST}/articles/sports`)
    .then((response) => {
      return response.data.articles;
    })
  } catch(e) {
    return {
      error: e
    }
  }
}

export const getFashionArticles = async () => {
  try {
    return await axios.get(`${HOST}/articles/fashion`)
    .then((response) => {
      return response.data.articles;
    })
  } catch (e) {
    return {
      error: e
    }
  }
}
