import { getCookie } from 'react-use-cookie';
import axiosInstance from '../../config/axiosConfig';

const token = getCookie('token');

const getPhotos = (payload) => axiosInstance
  .get(`/companies/${payload}/photos`, {
    headers: {
      Authorization: token,
    },
  })
  .then((response) => response);

export default getPhotos;
